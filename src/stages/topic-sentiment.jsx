const React = require("react");

const {Button, Hlt} = require("./common.jsx");
const SentimentFeedback = require("./sentiment-feedback.jsx");

const TopicSentiment = (userData, chatData, transitionStage) => {
    return <div>
        <p>How are you feeling about <Hlt>{userData.targetActivity.topic.translatedTitle}</Hlt>?</p>
        <Button onClick={() => {
            transitionStage(SentimentFeedback("solidifying the" +
                " fundamentals"), {topicFocus: "practice"})
        }} color="#E84D39" width={1/3}>Not that great...
        </Button>
        <Button onClick={() => {
            transitionStage(SentimentFeedback("mastering what" +
                " you've recently learned"), {topicFocus: "mastery"})
        }} color="#e07d10" width={1/3}>It's okay
        </Button>
        <Button onClick={() => {
            transitionStage(SentimentFeedback("learning new" +
                " concepts"), {topicFocus: "learn"})
        }} color="#1fab54" width={1/3}>I like it!
        </Button>
    </div>;
};

module.exports = TopicSentiment;