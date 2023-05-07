import React, { useEffect, useState } from "react";
import EcomCard from "./EcomCard";

const Ecom = () => {
  const [items, setItems] = useState([]);

  //   useEffect(() => {
  //     fetch("https://fakestoreapi.com/products")
  //       .then((respond) => respond.json())
  //       .then((data) => {
  //         const slicedItem = data.slice(0, 10);
  //         setItems(slicedItem);
  //       })
  //       .then(console.log(item));
  //   }, []);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        const slicedData = data.slice(0, 10);
        setItems(slicedData);
      });
  }, []);

  return (
    <div className="container">
      <div className="columns is-multiline">
        {items.map((item) => (
          <div key={item.id}>
            <EcomCard product={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ecom;
