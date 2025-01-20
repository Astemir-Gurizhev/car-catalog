import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CarService } from "../../../services/car.service";
import CarItem from "../home/car-item/CarItem";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const CarDetail = () => {
  const { id } = useParams();

  const [car, setCar] = useState({});

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      const data = await CarService.getById(id);
      setCar(data);
      console.log(data);
    };
    fetchData();
  }, [id]);

  const {user} = useContext(AuthContext)

  if (!user) return <p>You are not authorized to viev this page</p>;

  return (
    <>
      <Link to="/">Back</Link>
      <CarItem car={car} />
    </>
  );
};
export default CarDetail;
