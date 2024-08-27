import React from "react";
import { useState } from 'react';

function Tracker({ habit_id, habit_name }) {
    const [action, setAction] = useState("/track/" + habit_id + "/");
    
    return (
        <div className="tracker">
            <h3>Tracking: { habit_name }</h3>
            <form action={ action } method="post" encType="multipart/form-data">
                <button type="submit">Track</button>
                <label>
                    Notes
                    <input type="text" name="notes"></input>
                </label>
            </form>
        </div>
    )
};

export default Tracker;