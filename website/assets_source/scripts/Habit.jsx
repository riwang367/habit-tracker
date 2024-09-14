import React from "react";
import { useState } from "react";
import Button from "./Button";

function Habit({ id, name, desc, reward, history }) {
    const [hasHistory, setHasHistory] = useState(typeof(history) !== "string");
    const history_list = [];

    // FIXME: for some reason runs automatically
    const handleDelete = async() => {
        console.log("clicked " + id);
        try {
            const response = await fetch("/delete-habit/" + id + "/",
                { method: "DELETE" }
            );
            if (!response.ok) {
              throw new Error(`Response status: ${response.status}`);
              // TODO: have a visual display for user
            }
            console.log("Deleted");
            location.reload();
          } catch (error) {
            console.error(error.message);
          }
    }

    if (typeof(history) !== "string") {
        for (const index in history) {
            const item = history[index];
            if (item.notes === "") {
                history_list.push(<li>
                    { item.timestamp }
                </li>);
            }
            else {
                history_list.push(<li>
                    { item.timestamp } - { item.notes }
                </li>);
            }
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
        <div style={ styles.container } className="habit">
            <h3 style={ styles.h3 }>{ name }</h3>
            <p>{ desc }</p>
            <p>Linked reward: { reward }</p>
            <ul>
                { hasHistory ? history_list : "Nothing tracked yet!"}
            </ul>
            <Button handleClick={ handleDelete } text={ "Delete habit" } />
        </div>
    )
};

export default Habit;
  