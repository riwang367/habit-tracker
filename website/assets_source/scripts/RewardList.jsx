import React from "react";
import Reward from "./Reward";
import { replaceQuotes } from "./helperFunctions.js";

function RewardList({ rewards }) {
    const json_list = JSON.parse(replaceQuotes(rewards));

    const reward_list = [];
    for (const index in json_list) {
        const item = json_list[index];
        reward_list.push(<Reward 
            key={ item.reward_name } 
            name={ item.reward_name }
            desc={ item.reward_desc }
            goal={ item.goal }
            progress={ item.progress }
        />);
    }

    return (
        <div className="rewards-container">
            <h2>Rewards</h2>
            <div className="reward-list">{ reward_list }</div>
        </div>
    )
};

export default RewardList;
  