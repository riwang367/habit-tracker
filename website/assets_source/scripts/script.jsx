import React from "react";
import { createRoot } from "react-dom/client";

import RewardForm from "./RewardForm";
import RewardList from "./RewardList";
import HabitForm from "./HabitForm";
import HabitList from "./HabitList";
import TrackingContainer from "./TrackingContainer";

const trackersNode = document.getElementById("react-trackers");
const trackersRoot = createRoot(trackersNode);
trackersRoot.render(<TrackingContainer habits={ trackersNode.getAttribute("habits") }/>);

const rewardNode = document.getElementById("react-reward-form");
const rewardRoot = createRoot(rewardNode);
rewardRoot.render(<RewardForm />);

const rewardListNode = document.getElementById("react-reward-list");
const rewardListRoot = createRoot(rewardListNode);
rewardListRoot.render(<RewardList rewards={ rewardListNode.getAttribute("rewards") } />);

const habitNode = document.getElementById("react-habit-form");
const habitRoot = createRoot(habitNode);
habitRoot.render(<HabitForm rewards={ habitNode.getAttribute("rewards") } />);

const habitListNode = document.getElementById("react-habit-list");
const habitListRoot = createRoot(habitListNode);
habitListRoot.render(<HabitList habits={ habitListNode.getAttribute("habits") } />);