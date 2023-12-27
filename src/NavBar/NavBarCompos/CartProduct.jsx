import react, { useState } from "react";

import { VscAdd } from "react-icons/vsc";
import { VscChromeMinimize } from "react-icons/vsc";
import { useStateValue } from "../../ContextProvider";

function CartProduct(props) {
  const [productNum, setProductNum] = useState(1);
  const [{ basket }, dispach] = useStateValue();

  const removeFromBasket = () => {
    dispach({
        type : "REMOVE_FROM_BASKET",
        id: props.id,

    })
  };

  return (
    <div className="product">
      <small className="product-title">{props.title}</small>
      <div className="icons">
        <VscAdd
          className="plus-icon"
          onClick={() => setProductNum(productNum + 1)}
        />
        <strong className="number-of-products">
          {productNum <= 0 ? setProductNum(1) : productNum}
        </strong>
        <VscChromeMinimize
          className="mines-icon"
          onClick={() => setProductNum(productNum - 1)}
        />
      </div>
      <img className="image" src={props.image} />
      <button onClick={removeFromBasket} className="remove-btn">
        Reomove from cart
      </button>
    </div>
  );
}

export default CartProduct;
