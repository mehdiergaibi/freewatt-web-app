import React from "react";
import { FcLike } from "react-icons/fc";
import { TbShoppingCartPlus } from "react-icons/tb";
import "./products.css";
import { useStateValue } from "../../ContextProvider";

function Products(props) {
  const [{ basket }, dispach] = useStateValue();
  const [{ wishes }, dispachWishes] = useStateValue();
  //console.log("basket is this: ",basket);

  const addToCart = () => {
    dispach({
      type: "ADD_TO_BASKET",
      item: {
        id: props.id,
        price: props.price,
        title: props.title,
        quantite: props.quantite,
        image: props.image,
        numberOf: props.numberOf,
      },
    });
  };
  const addToWishes = () => {
    dispachWishes({
      type: "ADD_TO_WISHES",
      item: {
        id: props.id, 
        price: props.price,
        title: props.title,
        quantite: props.quantite,
        image: props.image,
        numberOf: props.numberOf,
      },
    });
  };
  let valuesCart;
  let existOrNoCart;
  basket.map((item) => (valuesCart = Object.values(item)));
  //console.log(values);

  if (valuesCart?.includes(props.id)) {
    existOrNoCart = 1;
  } else {
    existOrNoCart = 0;
  }
  let valuesWishes;
  let existOrNoWishes;
  wishes.map((item) => (valuesWishes = Object.values(item)));
  //console.log(values);

  if (valuesWishes?.includes(props.id)) {
    existOrNoWishes = 1;
  } else {
    existOrNoWishes = 0;
  }
  //isExist()
  return (
    <div className="product-card">
      <h4 className="quantite">{props.quantite} left</h4>
      <div className="icons">
        <FcLike
          className="like-icon"
          onClick={
            existOrNoWishes == 0
              ? addToWishes
              : () => alert("PRODUCT IS ALREADY IN wishes!!!")
          }
        />
        <TbShoppingCartPlus
          className="add-to-cart-icon"
          onClick={
            existOrNoCart == 0
              ? addToCart
              : () => alert("PRODUCT IS ALREADY IN CART!!!")
          }
        />
      </div>

      <img src={props.image} className="product-image" />
      <h3 className="product-title">{props.title}</h3>
      <h3 className="product-price">{props.price} $</h3>
    </div>
  );
}
export default Products;
