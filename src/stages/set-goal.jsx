const React = require("react");

const {PrimaryButton, Hlt} = require("./common.jsx");
const NextBadges = require("./next-badges.jsx");

const SetGoal = (userData, chatData, transitionStage) => {
    let goalDays = 0;
    return <div>
        <h3>Let's set a goal!</h3>
        <p>I'd like to master <Hlt>{chatData.topic.translatedTitle}</Hlt> in <input onChange={(e) => {
            goalDays = e.target.value;
        }}/> days.</p>
        <PrimaryButton onClick={() => {
            transitionStage(NextBadges, {goalDays: Number(goalDays), totalGoalDays: Number(goalDays)})
        }}>OK!
        </PrimaryButton>
    </div>;
};

module.exports = SetGoal;