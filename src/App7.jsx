import { createRoot } from "react-dom/client";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import SearchParams from "./SearchParams5";
import DetailsErrorBoundary from "./Details10";

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Link to={"/"}>Adopt Me Please!</Link>
      </header>
      <div>
        <Routes>
          <Route index element={<SearchParams />} />
          <Route path="details/:id" element={<DetailsErrorBoundary />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
