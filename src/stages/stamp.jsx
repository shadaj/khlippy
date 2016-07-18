const React = require("react");

const {CalendarStamp} = require("./common.jsx");
const Quote = require("./quote.jsx");

const Stamp = (userData, chatData, transitionStage) => {
    return <div>
        <h3>Let's add a stamp for today!</h3>
        <CalendarStamp onStamp={() => transitionStage(Quote)}/><span> </span>
    </div>;
};

module.exports = Stamp;