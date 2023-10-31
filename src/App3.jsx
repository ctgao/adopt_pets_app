import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams5";

// could add a <StrictMode> tag around your return statement
// this tells React to warn you if anything you're doing is bad practice
const App = () => {
  return (
    <div>
      <h1>Adopt Me Please!</h1>
      <SearchParams />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
