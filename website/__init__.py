import flask
from website.assets_blueprint import assets_blueprint

app = flask.Flask(__name__)

app.config.from_object("website.config")
app.register_blueprint(assets_blueprint)

#import website.api
import website.views
import website.model