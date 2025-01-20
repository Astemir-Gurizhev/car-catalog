import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CarService } from "../../../services/car.service";
import CarItem from "../home/car-item/CarItem";
import { Link } from "react-router-dom";
import { withAuth } from "../../../HOC/withAuth";
import { ICar } from '../../../types/car.interface'

const CarDetail = () => {
  const { id } = useParams();

  const [car, setCar] = useState<ICar>({} as ICar);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      const data = await CarService.getById(id);
      setCar(data);
      console.log(data);
    };
    fetchData();
  }, [id]);

  return (
    <>
      <Link to="/">Back</Link>
      <CarItem car={car} />
    </>
  );
};
export default withAuth(CarDetail);
