import React from "react";

function Reward({ name, desc, goal, progress }) {
    const styles = {
        container: {
            width: "80%"
        },
        h3: {
            fontFamily: "Consolas"
        }
    };
    
    return (
        <div style={ styles.container } className="reward">
            <h3 style={ styles.h3 }>{ name }</h3>
            <p>{ desc }</p>
            <p>Current status: { progress }/{ goal }</p>
        </div>
    )
};

export default Reward;
  