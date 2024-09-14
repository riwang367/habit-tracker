CREATE TABLE Habits (
    habit_id INTEGER PRIMARY KEY,
    habit_name VARCHAR(100) NOT NULL,
    habit_desc TEXT,
    reward_id INTEGER NOT NULL,
    FOREIGN KEY(reward_id) REFERENCES Rewards (reward_id)
);

CREATE TABLE Rewards (
    reward_id INTEGER PRIMARY KEY,
    reward_name VARCHAR(100) UNIQUE NOT NULL,
    reward_desc TEXT,
    goal INTEGER NOT NULL,
    progress DOUBLE NOT NULL DEFAULT 0,
    times_goal_met INTEGER NOT NULL DEFAULT 0
);

-- Template for habits
-- CREATE TABLE ExampleHabit (
--     id INTEGER PRIMARY KEY,
--     timestamp VARCHAR(100) NOT NULL,
--     notes TEXT
-- )