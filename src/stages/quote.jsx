const React = require("react");

const {PrimaryButton, Hlt, ResponsiveEmbed} = require("./common.jsx");

const interestingItems = [
    (<p>Before you go, I wanted to share something interesting I learned recently. Did you know that you learn by forming connections between the neurons in your brain? Your brain is like a muscle, so make sure you're always exercising it!</p>),
    (<div>
        <p>To wrap up, here's a cool video about how your brain can learn anything that I wanted to show you.</p>
        <ResponsiveEmbed src="https://www.youtube.com/embed/WtKJrB5rOKs"/>
    </div>)
];

const Quote = (userData, chatData, transitionStage) => {
    const index = Math.floor(Math.random() * interestingItems.length);

    return <div>
        <h3>That's all for today!</h3>
        {interestingItems[index]}
        {!!chatData.goalDays ? <p>Let's work towards your goal of mastering <Hlt>{chatData.topic.translatedTitle}</Hlt> in <Hlt>{chatData.totalGoalDays.toString()} days</Hlt>!</p> : <span/>}
        <PrimaryButton onClick={() => {
            window.location = (chatData.topicFocus === "mastery") ? ("http://khanacademy.org/mission/" + chatData.topic.identifier) : ("http://khanacademy.org" + chatData.topic.href)
        }}>Onwards!
        </PrimaryButton>
    </div>;
};

module.exports = Quote;