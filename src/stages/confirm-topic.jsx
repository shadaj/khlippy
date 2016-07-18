const React = require("react");

const {PrimaryButton, Hlt} = require("./common.jsx");
const NextBadges = require("./next-badges.jsx");
const SetGoal = require("./set-goal.jsx");

const ConfirmTopic = (userData, chatData, transitionStage) => {
    return <div>
        <h3>We'll focus on <Hlt>{chatData.topic.translatedTitle}</Hlt> today.</h3>
        <p>Would you like to set a goal for learning <Hlt>{chatData.topic.translatedTitle}</Hlt>?</p>
        <PrimaryButton onClick={() => {
            transitionStage(NextBadges)
        }} width={1/2}>No
        </PrimaryButton>
        <PrimaryButton onClick={() => {
            transitionStage(SetGoal)
        }} width={1/2}>Yes
        </PrimaryButton>
    </div>;
};

module.exports = ConfirmTopic;