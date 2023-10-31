import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchPet8";

// can't await in a render function, it cannot be async
const Details = () => {
  const { id } = useParams();
  // this will either query with the function in the 2nd slot and the params in the 1st slot
  // or it will pull from the cache that's associated with those params
  const results = useQuery(["details", id], fetchPet);

  // we know this will work, but we can always write an if(results.isError) to catch any fetch errors
  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">waiting</h2>
      </div>
    );
  }

  const pet = results.data.pets[0];

  return (
    <div className="details">
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} - {pet.breed} - {pet.city} - {pet.state}
          <button>Adopt {pet.name}</button>
          <p>{pet.description}</p>
        </h2>
      </div>
    </div>
  );
};

export default Details;