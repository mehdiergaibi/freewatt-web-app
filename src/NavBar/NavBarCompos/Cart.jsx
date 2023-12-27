import react, { useState } from 'react'
import { useStateValue } from '../../ContextProvider';
import "./cart.css"
import CartProduct from './CartProduct';

const Cart = (props) => {
    const [{ basket }, dispach] = useStateValue(); 
    return(
        <div className='cart-left'>
            {
                basket.map((product) => 
                   (
                    <CartProduct id={product.id} key={product.id} title={product.title} image={product.image} />
                ))
            }
        </div>
    )
}

export default Cart;