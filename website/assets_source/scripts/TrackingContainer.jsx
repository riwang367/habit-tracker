import React from "react";
import Tracker from "./Tracker";
import { replaceQuotes } from "./helperFunctions.js";

function TrackingContainer({ habits }) {
    const json_list = JSON.parse(replaceQuotes(habits));

    const habit_trackers = [];
    for (const index in json_list) {
        const item = json_list[index];
        habit_trackers.push(<Tracker
            key={ item.habit_name }
            habit_id={ item.habit_id }
            habit_name={ item.habit_name }
        />)
    }

    return(
        <div className="tracking-container">
            <h2>Track habits</h2>
            <div className="trackers-list">{ habit_trackers }</div>
        </div>
    )
};

export default TrackingContainer;