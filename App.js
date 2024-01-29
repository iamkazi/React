const heading = React.createElement("h1", {id: "heading"},"Hello World from React!");

const parent = React.createElement(
    "div",
    {id: "parent"},
    React.createElement(
        "div",
        {id: "child"},
        React.createElement(
            "div",
            {id: "h1"},
            "Im Nested H1"
            )
        )
);

const parent1 = React.createElement(
    "div",
    {id: "parent"},
    [React.createElement(
        "div",
        {id: "child1"},
        [React.createElement("div",{id: "h1"},"Im Nested H1 from child1"),
        React.createElement("div",{id: "h2"},"Im Nested H2 from child1")]
        )
        ,
        React.createElement(
            "div",
            {id: "child2"},
            [React.createElement("div",{id: "h1"},"Im Nested H1 from child2"),
            React.createElement("div",{id: "h2"},"Im Nested H2 Assfrom child2")]
            )]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent1);
console.log(parent1); // Returns object