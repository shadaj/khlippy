const React = require("react");

const AvatarTalk = React.createClass({
    propTypes: {
        avatarStage: React.PropTypes.string.isRequired,
        avatarType: React.PropTypes.string.isRequired,
        children: React.PropTypes.any,
    },

    render: function() {
        const {avatarType, avatarStage} = this.props;

        return <div
            style={{
                width: "1200px",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "100px",
            }}
        >
            <div
                className="speech-bubble"
                style={{
                    width: "70%",
                    border: "2px solid #626569",
                    borderRadius: "25px",
                    borderBottomRightRadius: "0px",
                    backgroundColor: "#ffffff",
                }}
            >
                <div
                    className="content"
                    style={{margin: "30px", fontSize: "20px"}}
                >
                    {this.props.children}
                </div>
            </div>
            <img
                className="avatar"
                style={{width: "30%", marginLeft: "70%"}}
                src={`./image/avatars/svg/${avatarType.toLowerCase()}-${avatarStage}.svg`}
            />
        </div>;
    },
});

module.exports = AvatarTalk;
