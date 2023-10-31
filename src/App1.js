// Data-flow is one-way (for the most part): pretty much like Abstraction
// Children can't mess up the parents rendering
// Parents can pass BAD data to children
const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.owner),
    React.createElement("h4", {}, props.element),
  ]);
};

const App = () => {
  // always capitalize React components: it's required
  // html tag type (div, h1, etc.), attributes for that tag, innerHTML between the open and close tag
  // the html tag type can even be a non-existent tag and React will try to render it
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me Please!"),
    React.createElement(Pet, {
      name: "Guoba",
      owner: "Xiangling",
      element: "fire",
    }),
    React.createElement(Pet, {
      name: "Taroumaru",
      owner: "Kamisato clan",
      element: "physical",
    }),
    React.createElement(Pet, {
      name: "Yuegui",
      owner: "Yaoyao",
      element: "dendro",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
