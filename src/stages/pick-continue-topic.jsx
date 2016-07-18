const React = require("react");

const {PrimaryButton, Hlt} = require("./common.jsx");
const PickDomain = require("./pick-domain.jsx");
const TopicSentiment = require("./topic-sentiment.jsx");

const PickContinueTopic = (userData, chatData, transitionStage) => {
    return <div>
        <p>Last time you were here, you were working on <Hlt>{userData.targetActivity.topic.translatedTitle}</Hlt>. Want to keep working on that?</p>
        <PrimaryButton onClick={() => {
            transitionStage(PickDomain)
        }} width={1/2}>Nah!
        </PrimaryButton>
        <PrimaryButton onClick={() => {
            transitionStage(TopicSentiment)
        }} width={1/2}>Yeah!
        </PrimaryButton>
    </div>
};

module.exports = PickContinueTopic;