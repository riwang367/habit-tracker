import flask
import website

@website.app.route("/", methods=["GET"])
def show_index():
    connection = website.model.get_db()

    cur = connection.execute(
        "SELECT reward_name, reward_desc, goal, progress FROM Rewards"
    )
    rewards = cur.fetchall()
    # Manipulate rewards for easier attribute parsing in React
    # { index : { rewards values } }
    rewards_dict = {}
    for count, reward in enumerate(rewards):
        # Remove reward_desc from obj if empty
        if (reward["reward_desc"] == None):
            reward.pop("reward_desc")

        # Convert index to string to match JSON format
        rewards_dict[str(count)] = reward

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

    # FIXME: get habits stuff working
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
            # FIXME: change the id to a string
            history_dict = {}
            for index, dict in enumerate(history):
                history_dict[str(index)] = dict
            
            print(history_dict)
            habit["history"] = history_dict

        habits_dict[str(count)] = habit

    print(habits_dict)

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
        (habit)
    ).fetchone()["habit_id"]
    connection.execute(
        "CREATE TABLE habit" + habit_id + "("
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
