// TODO: Imports all components and renders them in index file
import React from "react";
import { createRoot } from "react-dom/client";

import RewardForm from "./RewardForm";
import RewardList from "./RewardList";
import HabitForm from "./HabitForm";
import HabitList from "./HabitList";

const rewardNode = document.getElementById("reward-form");
const rewardRoot = createRoot(rewardNode);
rewardRoot.render(<RewardForm />);

const rewardListNode = document.getElementById("reward-list");
const rewardListRoot = createRoot(rewardListNode);
rewardListRoot.render(<RewardList list={ rewardListNode.getAttribute("rewards") } />);

const habitNode = document.getElementById("habit-form");
const habitRoot = createRoot(habitNode);
habitRoot.render(<HabitForm list={ habitNode.getAttribute("rewards") } />);

const habitListNode = document.getElementById("habit-list");
const habitListRoot = createRoot(habitListNode);
habitListRoot.render(<HabitList list={ habitListNode.getAttribute("habits") } />);