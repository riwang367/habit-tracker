import React from "react";
import Habit from "./Habit";
import { replaceQuotes } from "./helperFunctions";

function HabitList({ habits }) {
    const json_list = JSON.parse(replaceQuotes(habits));

    const habit_list = [];
    for (const index in json_list) {
        const item = json_list[index];
        habit_list.push(<Habit 
            key={ item.habit_id } 
            id={ item.habit_id }
            name={ item.habit_name }
            desc={ item.habit_desc }
            reward={ item.reward }
            history = { item.history }
        />);
    }

    return (
        <div className="habits-container">
            <h2>Habits</h2>
            <div className="habit-list">{ habit_list }</div>
        </div>
    )
};

export default HabitList;
