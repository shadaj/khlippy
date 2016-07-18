const React = require("react");

const {PrimaryButton, Hlt} = require("./common.jsx");
const NextBadges = require("./next-badges.jsx");

const SatStudying = (userData, chatData, transitionStage) => {
    const satDays = Math.round((userData.satTest.date - new Date())/(1000*60*60*24));

    return <div>
        <h3>Your SAT test is coming up in <Hlt>{satDays.toString()} days</Hlt>!</h3>
        <p>Today we'll focus on studying <Hlt>SAT {userData.satTest.toReview.type}</Hlt>. Your goal is to answer <Hlt>{userData.satTest.toReview.questions.toString()} questions</Hlt> today.</p>
        <PrimaryButton onClick={() => {
            transitionStage(NextBadges, {topic: {
                href: "/mission/sat/practice/" + userData.satTest.toReview.type
            }})
        }}>Let's go!
        </PrimaryButton>
    </div>;
};

module.exports = SatStudying;