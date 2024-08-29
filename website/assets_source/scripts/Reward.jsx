import React from "react";

function Reward({ name, desc, goal, progress, times_goal_met }) {
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
        </div>
    )
};

export default Reward;
  