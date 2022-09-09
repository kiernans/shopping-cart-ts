import React from "react";
import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";

interface ShopItemProps {
  id: string;
  image: string;
  name: string;
  price: number;
}

const ShopItem = ({ id, image, name, price }: ShopItemProps) => {
  const { getItemQuantity, increaseCartQuantity } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <>
      <img className="item-image" src={image} alt="" />
      <div className="item-title">{name}</div>
      <p>{quantity}</p>
      <div className="item-price">{formatCurrency(price)}</div>
      <button
        className="add-item"
        name={id}
        onClick={() => increaseCartQuantity(id)}
      >
        Add to cart
      </button>
    </>
  );
};

export default ShopItem;
