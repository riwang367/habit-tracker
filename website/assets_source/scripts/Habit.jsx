import React from "react";
import { useState } from 'react';

function Habit({ name, desc, reward, history }) {
    const [hasHistory, setHasHistory] = useState(typeof(history) !== "string");
    const history_list = [];

    // FIXME: something causes constant rerendering :[
    if (typeof(history) !== "string") {
        console.log("Testing");
        for (const index in history) {
            const item = history[index];
            history_list.push(<li>
                { item.timestamp } - { item.notes }
            </li>);
        }
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
                { hasHistory ? history_list : "Nothing tracked yet!"}
            </ul>
        </div>
    )
};

export default Habit;
  