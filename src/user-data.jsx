const React = require("react");

const UserData = React.PropTypes.shape({
    firstName: React.PropTypes.string.isRequired,
    avatarType: React.PropTypes.string.isRequired,
    avatarStage: React.PropTypes.string.isRequired,
    daysSinceLastLogin: React.PropTypes.number,
    targetActivity: React.PropTypes.shape({
        topic: React.PropTypes.any,
        totalGoalDays: React.PropTypes.number,
        goalDays: React.PropTypes.number,
        isComplete: React.PropTypes.bool,
    }),
    satTest: React.PropTypes.shape({
        date: React.PropTypes.any.isRequired,
        toReview: React.PropTypes.shape({
            type: React.PropTypes.string.isRequired,
            questions: React.PropTypes.number.isRequired,
        })
    }),
    recentBadges: React.PropTypes.arrayOf(React.PropTypes.shape({
        image: React.PropTypes.string.isRequired,
        name: React.PropTypes.string.isRequired,
    })).isRequired,
    soonBadges: React.PropTypes.arrayOf(React.PropTypes.shape({
        image: React.PropTypes.string.isRequired,
        name: React.PropTypes.string.isRequired,
    })).isRequired
});

module.exports = UserData;