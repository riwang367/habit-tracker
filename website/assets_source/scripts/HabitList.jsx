import React from "react";
import Habit from "./Habit";
import { replaceQuotes } from "./helperFunctions";

function HabitList({ list }) {
    const json_list = JSON.parse(replaceQuotes(list));

    const habit_list = [];
    for (const index in json_list) {
        const item = json_list[index];
        habit_list.push(<Habit 
            key={ item.habit_name } 
            name={ item.habit_name }
            desc={ item.habit_desc }
            reward={ item.reward }
            history = { item.history }
        />);
    }

    return (
        <div>{ habit_list }</div>
    )
};

export default HabitList;
