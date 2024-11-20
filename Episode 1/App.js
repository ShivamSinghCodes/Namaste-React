const parent = React.createElement(
  "div",
  { id: "Parent" },
  [React.createElement("div", { id: "Child" }, [
    React.createElement("h1", { id: "heading" }, "This is Child heading1 !"),
    React.createElement("h2", { id: "heading" }, "This is Child heading2 !"),
  ]),React.createElement("div", { id: "Child" }, [
    React.createElement("h1", { id: "heading" }, "This is Child heading1 !"),
    React.createElement("h2", { id: "heading" }, "This is Child heading2 !"),
  ])]
);
const root = ReactDOM.createRoot(document.getElementById("head"));
root.render(parent);
