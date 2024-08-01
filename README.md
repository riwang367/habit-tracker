## Setup
Clone this repository to your local machine

	git clone git@github.com:riwang367/habit-tracker.git

Open directory and navigate to website folder:

    cd habit-tracker/website

Install project dependencies:

	npm install

Create and start virtual environment:

    python3 -m venv env
    source env/bin/activate

Install Flask:

    pip install Flask

Check for execute permissions on bash scripts and add if needed:

    ls -l ./bin/flaskrun
    chmod +x bin/flaskrun

    ls -ls ./bin/database
    chmod +x bin/database

## Running the app
Navigate to website folder:

    cd habit-tracker/website

Start the Vite devserver:

    npm run dev

Open a new terminal and navigate to the project directory. Start the flask server:

    ../bin/flaskrun


## Resources
[Build a Vite 5 backend integration with Flask](https://dev.to/tylerlwsmith/build-a-vite-5-backend-integration-with-flask-jch)