const Pet = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <h3>{props.owner}</h3>
      <h3>{props.animal}</h3>
      <h4>{props.element}</h4>
      <h4>{props.breed}</h4>
    </div>
  );
};

export default Pet;
