"""API requests for index.html"""

import flask
from datetime import datetime
import website
import website.views.helpers as helpers

@website.app.route("/", methods=["GET"])
def show_index():
    connection = website.model.get_db()

    cur = connection.execute(
        "SELECT * FROM Rewards"
    )
    rewards = cur.fetchall()
    rewards_dict = helpers.convert_rewards(rewards)

    cur = connection.execute(
        "SELECT * FROM Habits"
    )
    habits = cur.fetchall()
    # habit_dict
    # { index: { 
    #       "habit_name": name
    #       "habit_desc": desc
    #       "reward": reward (query using reward_id)
    #       "history": records from habit_name table
    # } }
    habits_dict = {}

    for count, habit in enumerate(habits):
        if (habit["habit_desc"] == None):
            habit.pop("habit_desc")

        # Change reward value to name
        cur = connection.execute(
            "SELECT reward_name FROM Rewards "
            "WHERE reward_id = ?",
            (habit["reward_id"],)
        )
        
        habit["reward"] = cur.fetchone()["reward_name"]
        habit.pop("reward_id")
        
        cur = connection.execute(
            "SELECT timestamp, notes FROM habit" + str(habit["habit_id"])
        )
        history = cur.fetchall()

        if (len(history) == 0):
            habit["history"] = "Nothing tracked yet"
        else:
            history_dict = {}
            for index, dict in enumerate(history):
                if (dict["notes"] is None):
                    dict["notes"] = ""

                history_dict[str(index)] = dict
            
            habit["history"] = history_dict

        habits_dict[str(count)] = habit

    context = {
        "rewards": rewards_dict,
        "habits": habits_dict
    }

    return flask.render_template("index.html", **context), 200

@website.app.route("/add-habit/", methods=["POST"])
def add_habit():
    habit = flask.request.form["habit"]
    desc = flask.request.form["desc"]
    reward_name = flask.request.form["reward"]
    connection = website.model.get_db()
    reward_id = connection.execute(
        "SELECT reward_id FROM Rewards "
        "WHERE reward_name = ?",
        (reward_name,)
    ).fetchone()["reward_id"]

    connection = website.model.get_db()

    if (desc is None or desc == ""):
        connection.execute(
            "INSERT INTO Habits(habit_name, reward_id) "
            "VALUES (?, ?)",
            (habit, reward_id)
        )
    else:
        connection.execute(
            "INSERT INTO Habits(habit_name, habit_desc, reward_id) "
            "VALUES (?, ?, ?)",
            (habit, desc, reward_id)
        )

    habit_id = connection.execute(
        "SELECT habit_id FROM Habits "
        "WHERE habit_name = ?",
        (habit,)
    ).fetchone()["habit_id"]

    connection.execute(
        "CREATE TABLE habit" + str(habit_id) + "("
            "id INTEGER PRIMARY KEY, "
            "timestamp VARCHAR(100) NOT NULL, "
            "notes TEXT"
        ")"
    )
    
    return flask.redirect(flask.url_for("show_index"))

@website.app.route("/add-reward/", methods=["POST"])
def add_reward():
    reward = flask.request.form["reward"]
    goal = flask.request.form["goal"]

    connection = website.model.get_db()
    connection.execute(
        "INSERT INTO Rewards(reward_name, goal) "
        "VALUES (?, ?)",
        (reward, goal)
    )
    
    return flask.redirect(flask.url_for("show_index"))

@website.app.route("/track/<habit_id>/", methods=["POST"])
def track_habit(habit_id):
    notes = flask.request.form["notes"]
    # Example string: 08/26/24, 4:12 PM
    timestamp = datetime.now().strftime("%m/%d/%y, %I:%M %p")

    connection = website.model.get_db()
    if (notes is None or notes == ""):
        connection.execute(
            "INSERT INTO habit" + str(habit_id) + "(timestamp) "
            "VALUES (?)",
            (timestamp,)
        )
    else:
        connection.execute(
            "INSERT INTO habit" + str(habit_id) + "(timestamp, notes) "
            "VALUES (?, ?)",
            (timestamp, notes)
        )

    reward_id = connection.execute(
        "SELECT reward_id FROM Habits "
        "WHERE habit_id = ?",
        (habit_id,)
    ).fetchone()["reward_id"]

    cur = connection.execute(
        "SELECT progress, goal, times_goal_met FROM Rewards "
        "WHERE reward_id = ?",
        (reward_id,)
    ).fetchone()

    progress = cur["progress"] + 1
    goal = cur["goal"]
    times_goal_met = cur["times_goal_met"]

    # FIXME: if you reach the goal, need to change
    if (progress < goal):
        print(f"-------------------{progress}")
        connection.execute(
            "UPDATE Rewards "
            "SET progress = ? "
            "WHERE reward_id = ?",
            (progress, reward_id)
        )
    else:
        times_goal_met += 1
        connection.execute(
            "UPDATE Rewards "
            "SET progress = 0, times_goal_met = ? "
            "WHERE reward_id = ?",
            (times_goal_met, reward_id)
        )
        # TODO: return a pop-up saying goal met

    return flask.redirect(flask.url_for("show_index"))