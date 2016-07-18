const React = require("react");

const {PrimaryButton} = require("./common.jsx");
const RecentBadges = require("./recent-badges.jsx");

const CrowdfundingCampaign = (userData, chatData, transitionStage) => {
    return <div>
        <h3>Support Khan Academy on Indiegogo!</h3>
        <p>Did you know that Khan Academy is running a <a href="https://www.indiegogo.com/projects/help-khan-academy-create-lessons-on-us-government">crowdfunding campaign</a> on Indiegogo? Check it out and support the development of lessons on US government!</p>
        <PrimaryButton onClick={() => {
            transitionStage(RecentBadges)
        }}>Cool!
        </PrimaryButton>
    </div>;
};

module.exports = CrowdfundingCampaign;