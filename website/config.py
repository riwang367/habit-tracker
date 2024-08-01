"""Development configuration."""
import pathlib
# import os

# Root of this application, useful if it doesn't occupy an entire domain
APPLICATION_ROOT = '/'

# Secret key for encrypting cookies
SECRET_KEY = b'7\xf1\xd2}!v[\xb2\x01\xef;\x0cY\xb5\xf6\x84\xc2\xd7\x08\xb6\xf5S\xd1\xac'
SESSION_COOKIE_NAME = 'login'

# File Upload to var/uploads/
TRACKER_ROOT = pathlib.Path(__file__).resolve().parent.parent

# Database file is var/habit_tracker.sqlite3
DATABASE_FILENAME = TRACKER_ROOT/'var'/'habit_tracker.sqlite3'
