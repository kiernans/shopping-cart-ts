import React from "react";
import ShopItem from "../components/ShopItem";
import storeItems from "../data/items.json";
import "../styles/Shop.css";

const Shop = () => {
  return (
    <>
      <div className="Shop">
        {storeItems.map((item) => {
          return (
            <div key={item.id} className="ShopItem">
              <ShopItem
                name={item.name}
                id={item.id}
                price={item.price}
                image={item.image}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Shop;
