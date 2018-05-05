let Component = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        age: React.PropTypes.number
    },
    getDefaultProps: function () {
        return {
            age: 37
        }
    },
    render: function () {
        return React.DOM.span(null, "My name is " + this.props.name + " and age is " + this.props.age);
    }
});

ReactDOM.render(
    React.createElement(Component, {
        //age: 6,
        name: "Evgeni"
        //name: "Evgeni"
        // name: 2
    }),
    document.getElementById("app")
);