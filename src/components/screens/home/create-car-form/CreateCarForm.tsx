import { useState } from "react";
import styles from "./CreateCarForm.module.css";

const CreateCarForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const createCar = (e) => {
    e.preventDefault();
    console.log(name);
  };

  return (
    <form className={styles.form}>
      <div className={styles.inputs}>
        <input
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          placeholder="Price"
          onChange={(e) => setName(e.target.value)}
          value={price}
        />
        <input
          placeholder="Image"
          onChange={(e) => setName(e.target.value)}
          value={image}
        />
      </div>
      <button className="btn" onClick={(e) => createCar(e)}>
        Create
      </button>
    </form>
  );
};

export default CreateCarForm;
