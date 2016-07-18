const React = require("react");

const {PrimaryButton, Hlt} = require("./common.jsx");
const NextBadges = require("./next-badges.jsx");

const SentimentFeedback = (message) => {
    return (userData, chatData, transitionStage) => {
        return <div>
            <p>Alright, let's work on <Hlt>{message}</Hlt> in {userData.targetActivity.topic.translatedTitle}.</p>
            <PrimaryButton onClick={() => {
                transitionStage(NextBadges, Object.assign(userData.targetActivity, chatData.topic))
            }}>Sounds Good!
            </PrimaryButton>
        </div>
    }
};

module.exports = SentimentFeedback;