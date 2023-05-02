import React, { useContext } from "react";
import ShirtContext from "./Context/ShirtContext";

const CartDisplay = (props) => {
    let total=0;
  const details = useContext(ShirtContext);
  const showCart=details.items.filter((item) => item.Qty>0)
  return (
    <div>
      {showCart.map((item) => {
        total+=item.Qty*item.Price
        return (
            <li id={item.Id}>
              {item.Name}--{item.Description}--{item.Size}--{item.Qty}X--
              {item.Price * item.Qty}
            </li>
        )
      })}
      <button onClick={props.showCart}>Close</button>
      Total Amount:{total}
    </div>
  );
};

export default CartDisplay;
