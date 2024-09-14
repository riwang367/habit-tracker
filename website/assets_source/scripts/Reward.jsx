import React from "react";
import Button from "./Button";

function Reward({ id, name, desc, goal, progress, times_goal_met }) {
    const handleDelete = async() => {
        console.log("clicked");
        try {
            const response = await fetch("/delete-reward/" + id + "/",
                { method: "DELETE" }
            );
            if (!response.ok) {
              throw new Error(`Response status: ${response.status}`);
            }
            console.log("Deleted");
          } catch (error) {
            console.error(error.message);
          }
    }
    
    const styles = {
        container: {
            width: "80%"
        }
    };
    
    return (
        <div style={ styles.container } className="reward">
            <h3 style={ styles.h3 }>{ name }</h3>
            <h4>Times achieved: { times_goal_met }</h4>
            <p>{ desc }</p>
            <p>Current status: { progress }/{ goal }</p>
            <Button handleClick={ handleDelete } text={ "Delete reward" } />
        </div>
    )
};

export default Reward;
  