"""Development configuration."""
import pathlib
# import os

# Root of this application, useful if it doesn't occupy an entire domain
APPLICATION_ROOT = '/'

# Secret key for encrypting cookies
SECRET_KEY = b'\xac\xb0\x04\x1c*<d\xb0\x81hw\xda\xb5\x9bw\xf4\x9c\x1f\xdd\x14\xec2\xbf\xd2'
SESSION_COOKIE_NAME = 'login'

TRACKER_ROOT = pathlib.Path(__file__).resolve().parent
# Database file is var/habit_tracker.sqlite3
DATABASE_FILENAME = TRACKER_ROOT/'var'/'habit_tracker.sqlite3'
