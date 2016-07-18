const React = require("react");

const {PrimaryButton, Hlt} = require("./common.jsx");
const CheckGoal = require("./check-goal.jsx");

const SatAfter = (userData, chatData, transitionStage) => {
    return <div>
        <h3>Congrats on taking the <Hlt>{(userData.satTest.date.getMonth() + 1).toString()}/{userData.satTest.date.getDate().toString()}</Hlt> SAT!</h3>
        <p>Great Job! You're on your way to success in college!</p>
        <PrimaryButton onClick={() => {
            transitionStage(CheckGoal)
        }}>Great!
        </PrimaryButton>
    </div>;
};

module.exports = SatAfter;