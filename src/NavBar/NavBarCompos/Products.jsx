import React from "react";
import { FcLike } from "react-icons/fc";
import { TbShoppingCartPlus } from "react-icons/tb";
import "./products.css";
import { useStateValue } from "../../ContextProvider";

function Products(props) {

  const [{ basket }, dispach] = useStateValue();

  console.log("basket is this: ",basket);

  const addToCart = () => {
    dispach({
      type : "ADD_TO_BASKET",
      item : {
        id: props.id,
        price : props.price,
        title: props.title,
        quantite : props.quantite,
        image: props.image
      }
    })
  }

  return (
    <div className="product-card">
      <h4 className="quantite">{props.quantite} left</h4>
      <div className="icons">
        <FcLike className="like-icon" />
        <TbShoppingCartPlus className="add-to-cart-icon" onClick={addToCart} />
      </div>

      <img src={props.image} className="product-image" />
      <h3 className="product-title">{props.title}</h3>
      <h3 className="product-price">{props.price} $</h3>
    </div>
  );
}
export default Products;
