import flask

app = flask.flask(__name__)

app.config.from_object("website.config")

import website.api
import website.views
import website.model