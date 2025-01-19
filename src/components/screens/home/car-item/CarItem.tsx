import styles from "../Home.module.css";
import { Link } from "react-router-dom";
const CarItem = ({ car }) => {
  return (
    <div className={styles.item}>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(${car.image})`,
        }}
      />
      <div className={styles.info}>
        <h2>{car.name}</h2>
        <p>
          {new Intl.NumberFormat("ru-Ru", {
            style: "currency",
            currency: "USD",
          }).format(car.price)}
        </p>
        <Link className='btn' to={`/car/${car.id}`}>Read more</Link>
      </div>
    </div>
  );
};
export default CarItem;
