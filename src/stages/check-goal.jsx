const React = require("react");

const {PrimaryButton, Hlt} = require("./common.jsx");
const PickContinueTopic = require("./pick-continue-topic.jsx");
const PickDomain = require("./pick-domain.jsx");

const CheckGoal = (userData, chatData, transitionStage) => {
    if (typeof userData.targetActivity.goalDays !== "number") {
        transitionStage(PickContinueTopic);
    } else if (userData.targetActivity.goalDays <= 0) {
        if (userData.targetActivity.isComplete) {
            return <div>
                <h3>Goal check!</h3>
                <p>Looks like it's time to check if you've completed your goal!</p>
                <p>And... you made it! Congratulations on mastering <Hlt>{userData.targetActivity.topic.translatedTitle}</Hlt>!</p>
                <PrimaryButton onClick={() => {
                    transitionStage(PickDomain)
                }}>Great!
                </PrimaryButton>
            </div>;
        } else {
            return <div>
                <h3>Goal check!</h3>
                <p>Looks like it's time to check if you've completed your goal!</p>
                <p>And... looks like you didn't meet your goal. But don't worry, if you choose to continue working you'll get <Hlt>10 more days</Hlt> from now to meet your goal.</p>
                <PrimaryButton onClick={() => {
                    transitionStage(PickContinueTopic, {topic: {goalDays: 10, totalGoalDays: (userData.targetActivity.totalGoalDays + 10)}})
                }}>OK
                </PrimaryButton>
            </div>;
        }
    } else {
        if (userData.targetActivity.isComplete) {
            return <div>
                <h3>Goal check!</h3>
                <p>Let's check your status on mastering <Hlt>{userData.targetActivity.topic.translatedTitle}</Hlt> in <Hlt>{userData.targetActivity.totalGoalDays.toString()} days</Hlt>!</p>
                <p>You made it <Hlt>{userData.targetActivity.goalDays.toString()} days</Hlt> early! Great job! That's a pretty rare event!</p>
                <PrimaryButton onClick={() => {
                    transitionStage(PickDomain)
                }}>Hurray!
                </PrimaryButton>
            </div>;
        } else {
            return <div>
                <h3>Goal check!</h3>
                <p>Let's check your status on mastering <Hlt>{userData.targetActivity.topic.translatedTitle}</Hlt> in <Hlt>{userData.targetActivity.totalGoalDays.toString()} days</Hlt>!</p>
                <p>Looks like you're on track to reach your goal in the <Hlt>{userData.targetActivity.goalDays.toString()} days</Hlt> left. Keep up the good work!</p>
                <PrimaryButton onClick={() => {
                    transitionStage(PickContinueTopic)
                }}>OK!
                </PrimaryButton>
            </div>;
        }
    }
};

module.exports = CheckGoal;