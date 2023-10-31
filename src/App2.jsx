// the following import includes the WHOLE library
// import ReactDOM from 'react-dom';

// this next import only includes what you NEED
// "dead code elimination" vs. "live code inclusion"
// a VITE feature: only including what you need vs. removing unneeded code
import { createRoot } from "react-dom";
import Pet from "./Pet2";

const App = () => {
  // always capitalize React components: it's required
  // html tag type (div, h1, etc.), attributes for that tag, innerHTML between the open and close tag
  // the html tag type can even be a non-existent tag and React will try to render it
  return (
    <div>
      <h1>Adopt Me Please!</h1>
      <Pet name="Guoba" owner="Xiangling" element="pyro" />
      <Pet name="Taroumaru" owner="Kamisato Clan" element="physical" />
      <Pet name="Yuegui" owner="Yaoyao" element="dendro" />
    </div>
  );
  // regular HTML tags are lowercase; React components are uppercase
  // this helps denote the difference between the two in JSX!!!
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
