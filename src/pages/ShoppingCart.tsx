import React from "react";
import CartItem from "../components/CartItem";
import shopItems from "../data/items.json";
import "../styles/ShoppingCart.css";

const ShoppingCart = () => {
  const chosenItems = shopItems.filter((item) => item);

  return (
    <>
      <div className="Cart">
        {chosenItems.length > 0 ? (
          chosenItems.map((item) => {
            return (
              <div key={item.id} className="CartItem">
                <CartItem
                  name={item.name}
                  price={item.price}
                  id={item.id}
                  image={item.image}
                />
              </div>
            );
          })
        ) : (
          <p>Your cart is empty</p>
        )}
        {chosenItems.length > 0 ? (
          <div className="total">
            <strong>Total</strong>
            &emsp;&emsp;&emsp;&emsp;
            {/* {total.toFixed(2)} */}
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default ShoppingCart;
