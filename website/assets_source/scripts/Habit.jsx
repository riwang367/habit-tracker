import React from "react";
import { replaceQuotes } from "./helperFunctions.js";

function Habit({ name, desc, reward, history }) {
    const json_list = JSON.parse(replaceQuotes(history));
    const history_list = [];
    for (const index in json_list) {
        const item = json_list[index];
        history_list.push(<li>
            { item.timestamp } - { item.notes }
        </li>);
    }

    const styles = {
        container: {
            width: "80%"
        },
        h3: {
            fontFamily: "Consolas"
        }
    };
    
    return (
        <div style={ styles.container }>
            <h3 style={ styles.h3 }>{ name }</h3>
            <p>{ desc }</p>
            <p>Linked reward: { reward }</p>
            <ul>
                { history_list}
            </ul>
        </div>
    )
};

export default Habit;
  