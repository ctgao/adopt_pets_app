import { useState, useEffect } from "react";
import Pet from "./Pet2";

const ANIMALS = ["rabbit", "cat", "dog", "bird"];

// render functions are meant to be STATE-LESS! and fast since they're rendering all the time
const SearchParams = () => {
  // these props have to be called in order, not conditionally
  // all hooks start with the word USE (useState, useDispatch, etc.)
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [pets, setPets] = useState([]);

  // NOTE: This is a CONTROLLED form!!! Not best practice at all, we should be just grabbing the data
  // with a FormData object

  // TEMPORARY!
  const breeeeeeds = [];

  useEffect(() => {
    requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();

    setPets(json.pets);
  }

  // class is a reserved word in javascript, so we use className instead
  return (
    <div className="search-params">
      <form onSubmit={(e) => {
        e.preventDefault();
        requestPets();
      }}>
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
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
            placeholder="Animal"
          >
            <option />
            {ANIMALS.map((singularAnimal) => (
              <option key={singularAnimal}>{singularAnimal}</option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            disabled={breeeeeeds.length === 0}
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            placeholder="Breed"
          >
            <option />
            {breeeeeeds.map((singularBreed) => (
              <option key={singularBreed}>{singularBreed}</option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      {pets.map((p) => (
        <Pet name={p.name} animal={p.animal} breed={p.breed} key={p.id} />
      ))}
    </div>
  );
};

export default SearchParams;
