const React = require("react");

const {PrimaryButton, Hlt} = require("./common.jsx");
const PickDomain = require("./pick-domain.jsx");

const FirstTime = (userData, chatData, transitionStage) => {
    return <div>
        <h3>Hi {userData.firstName}. Welcome to Khan Academy!</h3>
        <p>I'm <Hlt>{userData.avatarType}</Hlt>, and I'm
            here to help you out with growing your mind on Khan Academy!
        </p>
        <p>Let's get started by picking your first topic!</p>
        <PrimaryButton onClick={() => {
            transitionStage(PickDomain)
        }}>Get Started</PrimaryButton>
    </div>;
};

module.exports = FirstTime;