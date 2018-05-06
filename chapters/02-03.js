let TextAreaCounter = React.createClass({
    propTypes: {
        textProp: React.PropTypes.string
    },
    getDefaultProps: function () {
        return {
            textProp: "Default"
        }
    },
    getInitialState: function () {
        return {
            textState: this.props.textProp
        }
    },
    _textChange: function (ev) {
          this.setState({
              textState: ev.target.value
          });
    },
    /*
    * To invoke componentWillReceiveProps method run in console:
    * let MyTextAreaCounter = ReactDOM.render(
    *     React.createElement(TextAreaCounter, {
    *           value: "New value"
    *     }),
    *     document.getElementById("app")
    * );
    */
    componentWillReceiveProps: function (newProps) {
        this.setState({
            textState: newProps.value
        });
    },
    render: function () {
        return React.DOM.div(
            null,
            React.DOM.textarea({
                value: this.state.textState,
                onChange: this._textChange
            }),
            React.DOM.h1(
                null,
                this.state.textState.length
            )
        );
    }
});

let myTextAreaCounter = ReactDOM.render(
    React.createElement(TextAreaCounter, {
        textProp: "Evgeni"
        //textProp: "Evgeni"
    }),
    document.getElementById("app")
);
