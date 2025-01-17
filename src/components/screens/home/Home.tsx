import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <h1>Cars catalog</h1>
      <div>
        <div className={styles.item}>
          <div
            className={styles.image}
            style={{
              backgroundImage: "url(/e63.jpg)",
            }}
          />
          <div className={styles.info}>
            <h2>Mercedes E63 AMG</h2>
            <p>$30 000</p>
            <button>Read more</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
