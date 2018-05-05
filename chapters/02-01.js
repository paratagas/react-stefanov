/*let Component = React.createClass({
      render: function () {
          return React.DOM.span(null, "My span");
      }
});

ReactDOM.render(
    React.createElement(Component),
    document.getElementById("app")
);*/

// ---

/*let ComponentFactory = React.createFactory(Component);
ReactDOM.render(
    ComponentFactory(),
    document.getElementById("app")
);*/

// ---


/*ReactDOM.render(
    React.createElement("span", null, "Hello"),
    document.getElementById("app")
);*/

// ---

let Component = React.createClass({
    render: function () {
        return React.DOM.span(null, "My name is " + this.props.name);
    }
});

ReactDOM.render(
    React.createElement(Component, {
        name: "Evgeni"
    }),
    document.getElementById("app")
);
