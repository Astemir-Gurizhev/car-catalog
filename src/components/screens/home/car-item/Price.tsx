 import React, { FC } from "react"
 const Price:FC<{price: string}> = ({ price }) => {
  return (
    <p>
      {new Intl.NumberFormat("ru-Ru", {
        style: "currency",
        currency: "USD",
      }).format(+price)}
    </p>
  );
};
export default React.memo(Price);
