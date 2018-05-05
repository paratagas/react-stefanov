/*ReactDOM.render(
    React.DOM.h1(null, "Hello World!"),
    document.getElementById("app")
);*/

ReactDOM.render(
    React.DOM.h1(
        {
            id: "my-heading",
            className: "pretty",
            style: {
                color: "blue",
                fontFamily: "Verdana"
            }
        },
        "Hello World!"
    ),
    document.getElementById("app")
);
