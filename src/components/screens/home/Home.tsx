import { useMemo } from "react"
import styles from "./Home.module.css";
import { cars } from "./cars.data.tsx";
import CarItem from "./car-item/CarItem.tsx";
const Home = () => {
  const filteredCars = useMemo(
    () => cars.filter((car) => car.price > 20000), []
  )

  return (
    <>
      <h1>Cars catalog</h1>
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
