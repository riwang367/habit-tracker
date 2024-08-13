// TODO: Imports all components and renders them in index file
import React from "react";
import { createRoot } from "react-dom/client";
// import HabitForm from "HabitForm";
import RewardForm from "./RewardForm";
import Reward from "./RewardForm";

export default function Test() {
  // TODO: Actually implement a navigation bar
  return (
    <div>
      <h1>Hello from React!</h1>
    </div>
  );
}

const domNode = document.getElementById("test");
const root = createRoot(domNode);
root.render(<Test />);

const rewardNode = document.getElementById("reward-form");
const rewardRoot = createRoot(rewardNode);
rewardRoot.render(<RewardForm />);

const rewardsNode = document.getElementById("reward-form");
const rewardsRoot = createRoot(rewardsNode);
rewardsRoot.render(<Reward />);