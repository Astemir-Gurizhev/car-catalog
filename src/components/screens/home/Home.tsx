import styles from "./Home.module.css";
import {cars} from "./cars.data.tsx"

const Home = () => {
  return (
    <>
      <h1>Cars catalog</h1>
        <div>
            {cars.map(car => ( 
                <div key={car.id} className={styles.item}>
                    <div
                        className={styles.image}
                        style={{
                        backgroundImage: `url(${car.image})`,
                        }}
                    />
                    <div className={styles.info}>
                        <h2>{car.name}</h2>
                        <p>${car.price}</p>
                        <button>Read more</button>
                    </div>
                </div>
            ))}
            
        </div>
    </>
  );
};
export default Home;
