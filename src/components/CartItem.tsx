import React from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

interface CartItemProps {
  id: string;
  image: string;
  name: string;
  price: number;
}

const CartItem = ({ id, image, name, price }: CartItemProps) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <>
      <img className="item-image" src={image} alt="" />
      <p>{name}</p>
      <p>{quantity}</p>
      <p>${formatCurrency(price)}</p>
      <button
        className="add-item"
        name={id}
        onClick={() => increaseCartQuantity(id)}
      >
        Add
      </button>
      <button
        className="remove-item"
        name={id}
        onClick={() => {
          if (quantity > 0) decreaseCartQuantity(id);
          else removeFromCart(id);
        }}
      >
        Remove
      </button>
    </>
  );
};

export default CartItem;
