import react, { useState } from "react";
import { useStateValue } from "../../ContextProvider";

function WishProduct(props) {
  const [{ wishes }, dispach] = useStateValue();

  const removeFromWishes = () => {
    dispach({
        type : "REMOVE_FROM_WISHES",
        id: props.id,

    })
  };

  return (
    <div className="product">
      <small className="product-title">{props.title}</small>
      <img className="image" src={props.image} />
      <button onClick={removeFromWishes} className="remove-btn">
        Reomove from wishes
      </button>
    </div>
  );
}

export default WishProduct;
