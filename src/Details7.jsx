import { useParams } from "react-router-dom";

const Details = () => {
  // the first example uses TYPESCRIPT: with typescript you have to specify the output type
  // therefore the output type is a string type??? - just a cursory guess
  // const { id } = useParams<'id'>();
  const { id } = useParams();
  // useParams requires a BrowserRouter component to get the id from the URL

  return <h2>pet {id}</h2>;
};

export default Details;