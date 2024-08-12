import React from 'react';

// Get reward data from server and pass in? or setState? or setState in script?
function HabitForm(reward) {
    return (
        <form action="/add-habit/" method="post" enctype="multipart/form-data">
            <label>
                Habit
                <input type="text" name="habit"></input>
            </label>
            <label>
                Description
                <input type="text" name="desc"></input>
            </label>
            <label>
                Reward
                <select type="select" name="reward" required>
                    <option value="unit">TODO</option>
                </select>
            </label>
            <button type="submit">Submit</button>
        </form>
    )
};

export default HabitForm;