import React from "react";

function Reward({name, goal, progress}) {
    const styles = {
        container: {
            width: "80%"
        },
        h3: {
            fontFamily: "Consolas"
        }
    };
    // TODO: progress bar style
    return (
        <div style={styles.container}>
            <h3 style={styles.h3}>{name}</h3>
            <p>Current status: {progress}/{goal}</p>
        </div>
    )
};

export default Reward;
  