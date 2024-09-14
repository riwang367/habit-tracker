"""Helper functions for API files"""

# Manipulate rewards for easier attribute parsing in React
# { index : { rewards values } }
def rewards_to_json(rewards):
    rewards_dict = {}
    for count, reward in enumerate(rewards):
        # Remove reward_desc from obj if empty
        if (reward["reward_desc"] == None):
            reward.pop("reward_desc")

        # Convert index to string to match JSON format
        rewards_dict[str(count)] = reward

    return rewards_dict

def habits_to_json(habits, habits_dict, connection):
    for count, habit in enumerate(habits):
        if (habit["habit_desc"] == None):
            habit.pop("habit_desc")

        # Change reward value to name
        cur = connection.execute(
            "SELECT reward_name FROM Rewards "
            "WHERE reward_id = ?",
            (habit["reward_id"],)
        )
        
        habit["reward"] = cur.fetchone()["reward_name"]
        habit.pop("reward_id")
        
        cur = connection.execute(
            "SELECT timestamp, notes FROM habit" + str(habit["habit_id"])
        )
        history = cur.fetchall()

        if (len(history) == 0):
            habit["history"] = "Nothing tracked yet"
        else:
            history_dict = {}
            for index, dict in enumerate(history):
                if (dict["notes"] is None):
                    dict["notes"] = ""

                history_dict[str(index)] = dict
            
            habit["history"] = history_dict

        habits_dict[str(count)] = habit

    return habits_dict