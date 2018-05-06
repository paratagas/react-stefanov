let logMixin = {
    _log: function(methodName, args) {
        console.log(this.name + '::' + methodName, args);
    },
    componentWillUpdate:  function() {this._log('componentWillUpdate',  arguments);},
    componentDidUpdate:   function() {this._log('componentDidUpdate',   arguments);},
    componentWillMount:   function() {this._log('componentWillMount',   arguments);},
    componentDidMount:    function() {this._log('componentDidMount',    arguments);},
    componentWillUnmount: function() {this._log('componentWillUnmount', arguments);},
};

let Counter = React.createClass({
    name: 'Counter',
    //mixins: [logMixin],
    propTypes: {
        count: React.PropTypes.number.isRequired,
    },
    shouldComponentUpdate: function(nextProps, nextState) {
        // console.log(this.name + '::shouldComponentUpdate()');
        return nextProps.count !== this.props.count;
    },
    render: function() {
        console.log(this.name + '::render()');
        return React.DOM.span(null, this.props.count);
    }
});

let TextAreaCounter = React.createClass({
    name: 'TextAreaCounter',
    //mixins: [logMixin],
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
    render: function() {
        console.log(this.name + '::render()');
        let counter = null;

        if (this.state.textState.length > 0) {
            counter = React.DOM.h1(null,
                React.createElement(Counter, {
                    count: this.state.textState.length,
                })
            );
        }

        return React.DOM.div(null,
            React.DOM.textarea({
                value: this.state.textState,
                onChange: this._textChange,
            }),
            counter
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
