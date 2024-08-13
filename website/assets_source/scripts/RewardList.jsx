import React from "react";
import Reward from "./Reward";

function RewardList({ list }) {
    // TODO: progress bar style
    return (
        <div>
            <Reward 
                name={ item.name }
                goal={ item.goal }
                progress={ item.progress }
            />
        </div>
    )
};

export default RewardList;
  