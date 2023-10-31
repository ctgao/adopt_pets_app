// Data-flow is one-way (for the most part): pretty much like Abstraction
// Children can't mess up the parents rendering
// Parents can pass BAD data to children
const Pet = (props) => {
  // eslint-disable-next-line no-undef
  return React.createElement("div", {}, [
    // eslint-disable-next-line no-undef
    React.createElement("h2", {}, props.name),
    // eslint-disable-next-line no-undef
    React.createElement("h3", {}, props.owner),
    // eslint-disable-next-line no-undef
    React.createElement("h4", {}, props.element),
  ]);
};

const App = () => {
  // always capitalize React components: it's required
  // html tag type (div, h1, etc.), attributes for that tag, innerHTML between the open and close tag
  // the html tag type can even be a non-existent tag and React will try to render it

  // eslint-disable-next-line no-undef
  return React.createElement("div", {}, [
    // eslint-disable-next-line no-undef
    React.createElement("h1", {}, "Adopt Me Please!"),
    // eslint-disable-next-line no-undef
    React.createElement(Pet, {
      name: "Guoba",
      owner: "Xiangling",
      element: "fire",
    }),
    // eslint-disable-next-line no-undef
    React.createElement(Pet, {
      name: "Taroumaru",
      owner: "Kamisato clan",
      element: "physical",
    }),
    // eslint-disable-next-line no-undef
    React.createElement(Pet, {
      name: "Yuegui",
      owner: "Yaoyao",
      element: "dendro",
    }),
  ]);
};

const container = document.getElementById("root");
// eslint-disable-next-line no-undef
const root = ReactDOM.createRoot(container);
// eslint-disable-next-line no-undef
root.render(React.createElement(App));
