import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import fetchPet from "./fetchPet8";
import Carousel from "./Carousel9";
import ErrorBoundary from "./ErrorBoundary10";
import Modal from "./Modal10";
import AdoptedPetContext from "./AdoptedPetContext10";

// can't await in a render function, it cannot be async
const Details = () => {
  const { id } = useParams();

  // the program controls where you go; don't have to create a link to send the user somehwere
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const [_, setAdoptedPet] = useContext(AdoptedPetContext);

  const results = useQuery(["details", id], fetchPet);
  const [showModal, setShowModal] = useState(false);
  // placing the modal HERE in details is great because then we can just use the pet information
  // that already exists in the details component and send it along to the modal and CUSTOMIZE it

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
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} - {pet.breed} - {pet.city} - {pet.state}
        </h2>
        <button onClick={() => setShowModal(true)}>Adopt {pet.name}</button>
        <p>{pet.description}</p>
        {showModal ? (
          <Modal>
            <div>
              <h1>Would you like to adopt {pet.name}?</h1>
              <div className="buttons">
                <button
                  onClick={() => {
                    setAdoptedPet(pet);
                    navigate("/");
                  }}
                >
                  Yes
                </button>
                <button onClick={() => setShowModal(false)}>No</button>
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    </div>
  );
};

// usage of {...props} is okay in this case! Why?
// Well in this case, the ErrorBoundary doesn't care about what these props are,
// they just need to be passed along to the details page
function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}

// why do we put this here? WELL!!! Error Boundary only catches the errors of the components WITHIN it
// therefore, if we were to wrap the Details component in its render function, it would not catch
// all the OTHER potential errors of the Details component.

export default DetailsErrorBoundary;
