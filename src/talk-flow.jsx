const React = require("react");
const Typist = require("react-typist");

const AvatarTalk = require("./avatar-talk.jsx");
const FirstTime = require("./stages/first-time.jsx");
const Returning = require("./stages/returning.jsx");
const UserData = require("./user-data.jsx");

const TalkFlow = React.createClass({
    propTypes: {
        userData: UserData.isRequired,
    },

    getInitialState: function() {
        return {
            stage: !this.props.userData.targetActivity ? FirstTime : Returning,
            chatData: {},
        };
    },

    _transitionStage: function(newStage, newChatData) {
        const combinedChatData = Object.assign(this.state.chatData, newChatData);
        this.setState({stage: newStage, chatData: combinedChatData});
    },

    render: function() {
        if (!this._counter) {
            this._counter = 0;
        }

        this._counter++;

        return <AvatarTalk {...this.props.userData}>
            <Typist
                key={this._counter}
                cursor={{show: false}}
                avgTypingDelay={20}
                stdTypingDelay={0}
            >
                {this.state.stage(
                    this.props.userData,
                    this.state.chatData,
                    this._transitionStage
                )}
            </Typist>
        </AvatarTalk>;
    }
});

module.exports = TalkFlow;