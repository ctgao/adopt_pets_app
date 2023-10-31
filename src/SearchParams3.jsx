import { useState } from "react";

const ANIMALS = ["rabbit", "cat", "dog", "bird"];

// render functions are meant to be STATE-LESS! and fast since they're rendering all the time
const SearchParams3 = () => {
  // these props have to be called in order, not conditionally
  // all hooks start with the word USE (useState, useDispatch, etc.)
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");

  // class is a reserved word in javascript, so we use className instead
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            placeholder="Animal"
          >
            <option />
            {ANIMALS.map((singularAnimal) => (
              <option key={singularAnimal}>{singularAnimal}</option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams3;
