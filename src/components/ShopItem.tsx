import React from "react";
import { formatCurrency } from "../utilities/formatCurrency";

interface ShopItemProps {
  id: string;
  image: string;
  name: string;
  qty: number;
  price: number;
}

const ShopItem = ({ id, image, name, qty, price }: ShopItemProps) => {
  return (
    <>
      <img className="item-image" src={image} alt="" />
      <div className="item-title">{name}</div>
      <p>{qty}</p>
      <div className="item-price">{formatCurrency(price)}</div>
      <button className="add-item" name={id}>
        Add to cart
      </button>
    </>
  );
};

export default ShopItem;
