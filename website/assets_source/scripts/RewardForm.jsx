import React from "react";

function RewardForm() {
    return (
        <form action="/add-reward/" method="post" encType="multipart/form-data">
            <label>
                Reward
                <input type="text" name="reward"></input>
            </label>
            <label>
                Description
                <input type="text" name="desc"></input>
            </label>
            <label>
                Goal (# times to get reward)
                <input type="number" name="goal"></input>
            </label>
            <button type="submit">Submit</button>
        </form>
    )
};

export default RewardForm;