import { useState } from "react";
import styles from "./CreateCarForm.module.css";

const clearData = {
  name: "",
  price: "",
  image: "",
};

const CreateCarForm = ({ setCars }) => {
  const [data, setData] = useState(clearData);

  const createCar = (e) => {
    e.preventDefault();
    setCars((prev) => [{ id: prev.length + 1, ...data }, ...prev]);

    setData(clearData);
  };

  return (
    <form className={styles.form}>
      <div className={styles.inputs}>
        <input
          placeholder="Name"
          onChange={(e) =>
            setData((prev) => ({
              ...prev,
              name: e.target.value,
            }))
          }
          value={data.name}
        />
        <input
          placeholder="Price"
          onChange={(e) =>
            setData((prev) => ({
              ...prev,
              price: e.target.value,
            }))
          }
          value={data.price}
        />
        <input
          placeholder="Image"
          onChange={(e) =>
            setData((prev) => ({
              ...prev,
              image: e.target.value,
            }))
          }
          value={data.image}
        />
      </div>
      <button className="btn" onClick={(e) => createCar(e)}>
        Create
      </button>
    </form>
  );
};

export default CreateCarForm;
