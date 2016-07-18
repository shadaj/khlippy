const React = require("react");

const Button = React.createClass({
    propTypes: {
        color: React.PropTypes.string.isRequired,
        width: React.PropTypes.number,
        onClick: React.PropTypes.func,
    },

    render: function () {
        return <button style={{
            width: !!this.props.width ? `calc(${this.props.width * 100}% - 10px` : "calc(100% - 10px",
            borderRadius: "4px",
            backgroundColor: this.props.color,
            border: "none",
            fontSize: "20px",
            color: "white",
            padding: "14px",
            fontFamily: "Proxima Nova, sans-serif",
            margin: "5px",
            cursor: "pointer",
        }} onClick={this.props.onClick}>{this.props.children}</button>;
    }
});

const PrimaryButton = React.createClass({
    propTypes: {
        width: React.PropTypes.number,
        onClick: React.PropTypes.func,
    },

    render: function () {
        return <Button color="#71b307" width={this.props.width} onClick={this.props.onClick}>{this.props.children}</Button>;
    }
});

const Hlt = React.createClass({
    propTypes: {
    },

    render: function() {
        return <span className="highlight" style={{
            color: "#71B307",
            fontWeight: "bold",
        }}>{this.props.children}</span>
    }
});

const Badge = (badge, i) => {
    return <div
        key={i}
        className="badge"
        style={{width: "calc(33% - 10px)", margin: "5px", textAlign: "center", display: "inline-block"}}
    >
        <img style={{width: "50%", marginLeft: "auto", marginRight: "auto"}} src={badge.image} />
        <p>{badge.name}</p>
    </div>;
};

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const CalendarStamp = React.createClass({
    propTypes: {
        onStamp: React.PropTypes.func,
    },

    getInitialState: function() {
        return {stamped: false};
    },

    render: function() {
        return <div style={{
            border: "1px solid black",
            position: "relative",
        }} className="calendar-stamp">
            <h1 style={{
                position: "absolute",
                top: "20px",
                left: "20px",
                margin: "0px",
            }}>{monthNames[(new Date()).getMonth()]} {((new Date()).getDate()).toString()}</h1>
            <img
                style={{
                    position: "absolute",
                    width: "300px",
                    height: "300px",
                    top: "50%",
                    left: "50%",
                    marginTop: "-150px",
                    marginLeft: "-150px",
                }}

                onClick={() => {
                    this.setState({stamped: true});
                    setTimeout(this.props.onStamp, 6000);
                }}

                className={this.state.stamped ? "stamped" : "unstamped"}

                src="/image/avatars/svg/leaf-green.svg"
            />
        </div>;
    }
});

const ResponsiveEmbed = React.createClass({
    propTypes: {
        src: React.PropTypes.string.isRequired,
    },

    render: function() {
        return <div style={{
            position: "relative",
            paddingBottom: "56.25%",
            height: "0"
        }}>
            <iframe style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%"
            }} src={this.props.src}></iframe>
        </div>
    }
});

module.exports = {
    Button: Button,
    PrimaryButton: PrimaryButton,
    Hlt: Hlt,
    Badge: Badge,
    CalendarStamp: CalendarStamp,
    ResponsiveEmbed: ResponsiveEmbed
};