const React = require("react");
import ReactDOM from 'react-dom';

const TalkFlow = require('./talk-flow.jsx');

const newUser = {
    firstName: "Shadaj",
    avatarType: "Aqualine",
    avatarStage: "ultimate",
    recentBadges: [],
    soonBadges: [],
};

const returningFreshUser = {
    firstName: "Shadaj",
    avatarType: "Duskpin",
    avatarStage: "ultimate",
    daysSinceLastLogin: 2,
    targetActivity: {
        topic: {
            "href": "\/math\/probability",
            "identifier": "probability",
            "translatedTitle": "Probability & statistics"
        },
        totalGoalDays: 20,
        goalDays: 15,
        isComplete: false,
    },
    recentBadges: [],
    soonBadges: [],
};

const expiredGoalsUser = {
    firstName: "Shadaj",
    avatarType: "Duskpin",
    avatarStage: "ultimate",
    daysSinceLastLogin: 2,
    targetActivity: {
        topic: {
            "href": "\/math\/probability",
            "identifier": "probability",
            "translatedTitle": "Probability & statistics"
        },
        totalGoalDays: 20,
        goalDays: 0,
        isComplete: false,
    },
    recentBadges: [],
    soonBadges: [],
};

const finishedGoalsUser = {
    firstName: "Shadaj",
    avatarType: "Duskpin",
    avatarStage: "ultimate",
    daysSinceLastLogin: 2,
    targetActivity: {
        topic: {
            "href": "\/math\/probability",
            "identifier": "probability",
            "translatedTitle": "Probability & statistics"
        },
        totalGoalDays: 20,
        goalDays: 0,
        isComplete: true,
    },
    recentBadges: [],
    soonBadges: [],
};

const earlyFinishedGoalsUser = {
    firstName: "Shadaj",
    avatarType: "Duskpin",
    avatarStage: "ultimate",
    daysSinceLastLogin: 2,
    targetActivity: {
        topic: {
            "href": "\/math\/probability",
            "identifier": "probability",
            "translatedTitle": "Probability & statistics"
        },
        totalGoalDays: 20,
        goalDays: 2,
        isComplete: true,
    },
    recentBadges: [],
    soonBadges: [],
};

const onTrackGoalsUser = {
    firstName: "Shadaj",
    avatarType: "Duskpin",
    avatarStage: "ultimate",
    daysSinceLastLogin: 2,
    targetActivity: {
        topic: {
            "href": "\/math\/probability",
            "identifier": "probability",
            "translatedTitle": "Probability & statistics"
        },
        totalGoalDays: 20,
        goalDays: 2,
        isComplete: false,
    },
    recentBadges: [],
    soonBadges: [],
};

const returningOldUser = {
    firstName: "Shadaj",
    avatarType: "Leafers",
    avatarStage: "ultimate",
    daysSinceLastLogin: 30,
    targetActivity: {
        topic: {
            "href": "\/math\/probability",
            "identifier": "probability",
            "translatedTitle": "Probability & statistics"
        }
    },
    recentBadges: [],
    soonBadges: [],
};

const preSATUser = {
    firstName: "Shadaj",
    avatarType: "Piceratops",
    avatarStage: "ultimate",
    daysSinceLastLogin: 30,
    targetActivity: {
        topic: {
            "href": "\/math\/probability",
            "identifier": "probability",
            "translatedTitle": "Probability & statistics"
        }
    },
    satTest: {
        date: new Date("10 01 2016"),
        toReview: {
            type: "reading",
            questions: 30
        }
    },
    recentBadges: [],
    soonBadges: [],
};

const postSATUser = {
    firstName: "Shadaj",
    avatarType: "Primosaur",
    avatarStage: "ultimate",
    daysSinceLastLogin: 30,
    targetActivity: {
        topic: {
            "href": "\/math\/probability",
            "identifier": "probability",
            "translatedTitle": "Probability & statistics"
        }
    },
    satTest: {
        date: new Date("06 01 2016")
    },
    recentBadges: [],
    soonBadges: [],
};

const earnedBadges = {
    firstName: "Shadaj",
    avatarType: "Starky",
    avatarStage: "ultimate",
    daysSinceLastLogin: 30,
    targetActivity: {
        topic: {
            "href": "\/math\/probability",
            "identifier": "probability",
            "translatedTitle": "Probability & statistics"
        }
    },
    recentBadges: [
        {
            image: "./image/badges/earth/work-horse-512x512.png",
            name: "Work Horse"
        },
        {
            image: "./image/badges/earth/sensei-512x512.png",
            name: "Sensei"
        },
        {
            image: "./image/badges/eclipse.png",
            name: "Atlas"
        }
    ],
    soonBadges: [
        {
            image: "./image/badges/earth/work-horse-512x512.png",
            name: "Work Horse"
        },
        {
            image: "./image/badges/earth/investigator-512x512.png",
            name: "Investigator"
        },
        {
            image: "./image/badges/sun/magellan-512x512.png",
            name: "Magellan"
        },
        {
            image: "./image/badges/earth/ridiculous-listener-512x512.png",
            name: "Ridiculous Listener"
        },
        {
            image: "./image/badges/eclipse.png",
            name: "Is Sal"
        }
    ]
};

const combo = {
    firstName: "Shadaj",
    avatarType: "Duskpin",
    avatarStage: "ultimate",
    daysSinceLastLogin: 4,
    targetActivity: {
        topic: {
            "href": "\/math\/probability",
            "identifier": "probability",
            "translatedTitle": "Probability & statistics"
        },
        totalGoalDays: 20,
        goalDays: 3,
        isComplete: false,
    },
    satTest: {
        date: new Date("06 01 2016")
    },
    recentBadges: [
        {
            image: "./image/badges/earth/work-horse-512x512.png",
            name: "Work Horse"
        },
        {
            image: "./image/badges/earth/sensei-512x512.png",
            name: "Sensei"
        },
        {
            image: "./image/badges/eclipse.png",
            name: "Atlas"
        }
    ],
    soonBadges: [
        {
            image: "./image/badges/earth/work-horse-512x512.png",
            name: "Work Horse"
        },
        {
            image: "./image/badges/earth/investigator-512x512.png",
            name: "Investigator"
        },
        {
            image: "./image/badges/sun/magellan-512x512.png",
            name: "Magellan"
        },
        {
            image: "./image/badges/earth/ridiculous-listener-512x512.png",
            name: "Ridiculous Listener"
        },
        {
            image: "./image/badges/eclipse.png",
            name: "Is Sal"
        }
    ]
};

ReactDOM.render(<TalkFlow userData={combo}/>, document.querySelector("#main-container"));
