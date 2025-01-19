import { useState, useMemo, useEffect, useCallback, useContext } from "react";
import styles from "./Home.module.css";
import { cars as carsData } from "./cars.data.tsx";
import { CarService } from "../../../services/car.service.ts";
import CarItem from "./car-item/CarItem.tsx";
import CreateCarForm from "./create-car-form/CreateCarForm.tsx";
import { AuthContext } from "../../../providers/AuthProvider.tsx";

const Home = () => {
  const [cars, setCars] = useState(carsData);

  const clearCars = useCallback(
    () => () => {
      setCars([]);
    },
    [cars]
  );

  const filteredCars = useMemo(
    () => cars.filter((car) => car.price > 20000),
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      const data = await CarService.getAll();
      setCars(data);
    };
    fetchData();
    return clearCars;
  }, []);

  const {user, setUser} = useContext(AuthContext)

  return (
    <>
      <h1>Cars catalog</h1>

      {user ? <> <h2>Welcome, {user.name}!</h2> 
      <button onClick={() => setUser(null)}>Logout</button>
       </> : <button onClick={() => setUser({
        name: 'Astemir'
       })}>Login</button>}

      <CreateCarForm setCars={setCars} />
      <div className={styles.items}>
        {filteredCars.length ? (
          filteredCars.map((car) => <CarItem key={car.id} car={car} />)
        ) : (
          <p>There are no cars</p>
        )}
      </div>
    </>
  );
};
export default Home;
