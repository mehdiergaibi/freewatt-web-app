import react, { useState } from 'react'
import { useStateValue } from '../../ContextProvider';
import { FaPlus } from "react-icons/fa";
import { GoDash } from "react-icons/go";


const Cart = () => {
    const [{ basket }, dispach] = useStateValue(); 
    const [ productNum, setProductNum ] = useState(1);
    return(
        <>
            {
                basket.map((product) => {
                    <div>
                        <small>{product.title}</small>
                        <div>
                            <FaPlus onClick={() => setProductNum = productNum + 1} />
                            <strong>
                                {productNum}
                            </strong>
                            <GoDash onClick={() => setProductNum = productNum - 1} />
                        </div>
                        <img src={product.image}/>
                    </div>
                })
            }
        </>
    )
}

export default Cart;