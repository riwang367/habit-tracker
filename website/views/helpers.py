"""Helper functions for API files"""

# Manipulate rewards for easier attribute parsing in React
# { index : { rewards values } }
def convert_rewards(rewards):
    rewards_dict = {}
    for count, reward in enumerate(rewards):
        # Remove reward_desc from obj if empty
        if (reward["reward_desc"] == None):
            reward.pop("reward_desc")

        # Convert index to string to match JSON format
        rewards_dict[str(count)] = reward

    return rewards_dict