import React from "react";

// Get reward data from server and pass in? or setState? or setState in script?
function HabitForm({ list }) {
    console.log(list);

    // Replace quotation marks with escape character
    list = list.replaceAll("\"", "&quot;")
    // Replace single quotes with double quotes
    list = list.replaceAll("'","\"");
    const json_list = JSON.parse(list);

    const reward_list = [];
    for (const index in json_list) {
        const reward = json_list[index].reward_name;
        reward_list.push(<option value={ reward }>{ reward }</option>);
    }

    return (
        <div><p>Testing</p>
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
                    { reward_list }
                </select>
            </label>
            <button type="submit">Submit</button>
        </form>
        </div>
    )
};

export default HabitForm;