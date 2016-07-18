const React = require("react");

const {PrimaryButton, Hlt} = require("./common.jsx");
const CrowdfundingCampaign = require("./crowdfunding-campaign.jsx");

const Returning = (userData, chatData, transitionStage) => {
    const timeMessage = userData.daysSinceLastLogin < 5 ? "Nice to see you again!" : "Long time no see!";

    return <div>
        <h3>Welcome back!</h3>
        <p>{timeMessage} It's been <Hlt>{userData.daysSinceLastLogin.toString()} days</Hlt> since you last logged onto Khan Academy!</p>

        {userData.daysSinceLastLogin >= 5 ?
            <p>I like to set reminders for myself so that I don't forget to grow my mind.</p> : <span/>}

        <PrimaryButton onClick={() => {
            transitionStage(CrowdfundingCampaign)
        }}>Let's Go!
        </PrimaryButton>
    </div>;
};

module.exports = Returning;