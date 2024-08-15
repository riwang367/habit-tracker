## Setup
Clone this repository to your local machine

	git clone git@github.com:riwang367/habit-tracker.git

Navigate to the project folder. Create and start virtual environment:

    cd habit-tracker
    python3 -m venv env
    source env/bin/activate

Install Flask:

    pip install Flask

Navigate to website folder. Install project dependencies:

    cd website
	npm install

Check for execute permissions on bash scripts and add if needed:

    ls -l ./bin/flask
    chmod +x ./bin/flask

    ls -ls ./bin/database
    chmod +x ./bin/database

## Running the app
Navigate to website folder:

    cd habit-tracker/website

Start the Vite devserver:

    npm run dev

Open a new terminal and navigate to the project folder. Start the Flask server:

    ./bin/flask run


## Resources
[Build a Vite 5 backend integration with Flask](https://dev.to/tylerlwsmith/build-a-vite-5-backend-integration-with-flask-jch)