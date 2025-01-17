import styles from "./Home.module.css";
import {cars} from "./cars.data.tsx"

const Home = () => {
  return (
    <>
      <h1>Cars catalog</h1>
        <div className={styles.items}>
            {cars.length ? cars.map(car => ( 
                <div key={car.id} className={styles.item}>
                    <div
                        className={styles.image}
                        style={{
                        backgroundImage: `url(${car.image})`,
                        }}
                    />
                    <div className={styles.info}>
                        <h2>{car.name}</h2>
                        <p>
                            {new Intl.NumberFormat('ru-Ru', {
                                style: 'currency',
                                currency: 'USD',
                            }).format(car.price)}
                        </p>
                        <button>Read more</button>
                    </div>
                </div>
            ))
            : <p>There are no cars</p>
        }
            
        </div>
    </>
  );
};
export default Home;
