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
    # { index : { rewards values }, index : { rewards_values} }
    rewards_dict = {}
    for count, reward in enumerate(rewards):
        # Remove reward_desc from obj if empty
        if (reward["reward_desc"] == None):
            reward.pop("reward_desc")

        # Convert index to string to match JSON format
        rewards_dict[str(count)] = reward

    # TODO
    # habit_dict
    # { index: { 
    #       "habit_name": name
    #       "habit_desc": desc
    #       "reward": reward (query using reward_id)
    #       "history": records from habit_name table
    # } }
    context = {
        "rewards": rewards_dict
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
        (reward_name)
    ).fetchone()

    print(reward_id)

    connection = website.model.get_db()
    connection.execute(
        "INSERT INTO Habits(habit_name, habit_desc, reward_id) "
        "VALUES (?, ?, ?)",
        habit, desc, reward_id
    )

    connection.execute(
        "CREATE TABLE (habit_name) ( "
            "id INTEGER PRIMARY KEY, "
            "timestamp VARCHAR(100), "
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
