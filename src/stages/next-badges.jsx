const React = require("react");

const {PrimaryButton, Badge} = require("./common.jsx");
const Stamp = require("./stamp.jsx");

const NextBadges = (userData, chatData, transitionStage) => {
    if (userData.soonBadges.length == 0) {
        transitionStage(Stamp);
    } else {
        return <div>
            <h3>You're on track to get these badges soon!</h3>
            {userData.soonBadges.map((b, i) => Badge(b, i))}
            <p>Keep on working to get them!</p>
            <PrimaryButton onClick={() => {
                transitionStage(Stamp)
            }}>Awesome!</PrimaryButton>
        </div>;
    }
};

module.exports = NextBadges;