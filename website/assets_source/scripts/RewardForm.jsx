import React from "react";

function RewardForm() {
    return (
        <div className="reward-form">
            <h2>Add a reward</h2>
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
        </div>
        
    )
};

export default RewardForm;