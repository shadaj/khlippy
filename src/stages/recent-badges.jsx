const React = require("react");

const {PrimaryButton, Badge} = require("./common.jsx");
const SatStudying = require("./sat-studying.jsx");
const SatAfter = require("./sat-after.jsx");
const CheckGoal = require("./check-goal.jsx");

const RecentBadges = (userData, chatData, transitionStage) => {
    const next = (!!userData.satTest) ? (
        !!userData.satTest.toReview ? SatStudying : SatAfter
    ) : CheckGoal;

    if (userData.recentBadges.length == 0) {
        transitionStage(next);
    } else {
        return <div>
            <h3>Congrats on receiving these badges!</h3>
            {userData.recentBadges.map((b, i) => Badge(b, i))}
            <PrimaryButton onClick={() => {
                transitionStage(next)
            }}>Great!</PrimaryButton>
        </div>;
    }
};

module.exports = RecentBadges;