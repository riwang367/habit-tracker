import React from "react";
import { replaceQuotes } from "./helperFunctions.js";

function HabitForm({ rewards }) {
    const json_list = JSON.parse(replaceQuotes(rewards));

    const reward_list = [];
    for (const index in json_list) {
        const reward = json_list[index].reward_name;
        reward_list.push(<option key={ reward } value={ reward }>{ reward }</option>);
    }

    return (
        <div className="habit-form">
            <h2>Add a habit</h2>
            <form action="/add-habit/" method="post" encType="multipart/form-data">
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
                        { reward_list }
                    </select>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
};

export default HabitForm;