INSERT INTO Rewards(reward_id, reward_name, reward_desc, goal)
VALUES (0, "Test reward", "Description", 3);

INSERT INTO Habits(habit_id, habit_name, reward_id)
VALUES (0, "Test habit", 0);

CREATE TABLE habit0(
    id INTEGER PRIMARY KEY,
    timestamp VARCHAR(100) NOT NULL,
    notes TEXT
);

INSERT INTO habit0(id, timestamp, notes)
VALUES (0, "not a real date", "habithabit");