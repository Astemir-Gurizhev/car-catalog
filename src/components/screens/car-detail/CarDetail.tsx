import { useParams } from "react-router-dom";
const CarDetail = () => {
  const { id } = useParams();
  return <h1>Car detail {id}</h1>;
};
export default CarDetail;
