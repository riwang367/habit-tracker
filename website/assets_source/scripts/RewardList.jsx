import React from "react";
import Reward from "./Reward";

function RewardList({ list }) {
    // Replace quotation marks with escape character
    list = list.replaceAll("\"", "&quot;")
    // Replace single quotes with double quotes
    list = list.replaceAll("'","\"");
    const json_list = JSON.parse(list);

    const reward_list = [];
    for (const index in json_list) {
        const item = json_list[index];
        reward_list.push(<Reward 
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
  