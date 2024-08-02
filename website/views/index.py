import flask
import website

@website.app.route("/", methods=["GET"])
def show_index():
    return flask.render_template("index.html")