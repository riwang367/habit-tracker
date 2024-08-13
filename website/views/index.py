import flask
import website

@website.app.route("/", methods=["GET"])
def show_index():
    return flask.render_template("index.html")

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

    connection = website.model.get_db()
    connection.execute(
        "INSERT INTO Habits(row, names) "
        "VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
    )
    
    return flask.redirect(flask.url_for("show_index"))

@website.app.route("/add-reward/", methods=["POST"])
def add_reward():
    reward = flask.request.form["reward"]
    goal = flask.request.form["goal"]
    connection = website.model.get_db()

    connection = website.model.get_db()
    connection.execute(
        "INSERT INTO Rewards(reward_name, goal) "
        "VALUES (?, ?)",
        (reward, goal)
    )
    
    return flask.redirect(flask.url_for("show_index"))
