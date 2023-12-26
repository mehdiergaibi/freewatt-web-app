import react, { useState } from 'react'
import { useStateValue } from '../../ContextProvider';
import { VscAdd } from "react-icons/vsc";
import { VscChromeMinimize } from "react-icons/vsc";
import "./cart.css"

const Cart = (props) => {
    const [{ basket }, dispach] = useStateValue(); 
    const [ productNum, setProductNum ] = useState(1);
    return(
        <div className='cart-left'>
            {
                basket.map((product) => 
                   ( <div className='product'>
                        <small className='product-title'>{product.title}</small>
                        <div className='icons' >
                            <VscAdd className='plus-icon' onClick={() => setProductNum(productNum + 1)} />
                            <strong className='number-of-products'>
                                {productNum}
                            </strong>
                            <VscChromeMinimize className='mines-icon' onClick={() => setProductNum(productNum - 1)} />
                        </div>
                        <img className='image' src={product.image}/>
                        <button className='remove-btn'>Reomove from cart</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Cart;