const React = require("react");

const {Button, Hlt} = require("./common.jsx");
const ConfirmTopic = require("./confirm-topic.jsx");

const subjectColors = {
    "math": "#11ACCD",
    "partner": "#01A995",
    "computing": "#1FAB54",
    "economics-finance-domain": "#E07D10",
    "test-prep": "#7853AB",
    "science": "#CA337C",
    "humanities": "#E84D39",
};

const renderTopic = (domain, topic, transitionStage) => {
    return <Button
        key={topic.href}
        onClick={() => {
            transitionStage(ConfirmTopic, {topic: topic, topicFocus: "learn"})
        }}
        color={subjectColors[domain.identifier]}
        width={1/2}
    >
        {topic.translatedTitle}
    </Button>
};

const PickTopic = (domain) => {
    return (userData, chatData, transitionStage) => {
        return <div>
            <h3>What topic in <Hlt>{domain.translatedTitle}</Hlt> would you
                like to learn?</h3>
            {domain.children.map((t) =>
                renderTopic(domain, t, transitionStage))}
        </div>;
    }
};

module.exports = PickTopic;