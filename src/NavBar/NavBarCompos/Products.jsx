import react from "react";
import { FcLike } from "react-icons/fc";
import { TbShoppingCartPlus } from "react-icons/tb";
import "./products.css";

function Products(props) {
  return (
    <div className="product-card">
      <h4 className="quantite">{props.quantite} left</h4>
      <div className="icons">
        <FcLike className="like-icon" />
        <TbShoppingCartPlus className="add-to-cart-icon" />
      </div>

      <img src={props.image} className="product-image" />
      <h3 className="product-title">{props.title}</h3>
      <h3 className="product-price">{props.price} $</h3>
    </div>
  );
}
export default Products;
