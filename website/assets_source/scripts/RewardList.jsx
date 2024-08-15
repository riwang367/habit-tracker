import React from "react";
import Reward from "./Reward";
import { replaceQuotes } from "./helperFunctions.js";

function RewardList({ list }) {
    const json_list = JSON.parse(replaceQuotes(list));

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
        <div>{ reward_list }</div>
    )
};

export default RewardList;
  