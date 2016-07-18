const React = require("react");

const {Button} = require("./common.jsx");
const PickTopic = require("./pick-topic.jsx");
const Domains = require("../domains.jsx");

const subjectColors = {
    "math": "#11ACCD",
    "partner": "#01A995",
    "computing": "#1FAB54",
    "economics-finance-domain": "#E07D10",
    "test-prep": "#7853AB",
    "science": "#CA337C",
    "humanities": "#E84D39",
};

const renderDomain = (domain, transitionStage) => {
    return <Button
        key={domain.href}
        onClick={() => {
            transitionStage(PickTopic(domain))
        }}
        color={subjectColors[domain.identifier]}
        width={1/2}
    >
        {domain.translatedTitle}
    </Button>;
};

const PickDomain = (userData, chatData, transitionStage) => {
    return <div>
        <h3>What do you want to work on today?</h3>
        {Domains.map((d) => renderDomain(d, transitionStage))}
    </div>;
};

module.exports = PickDomain;