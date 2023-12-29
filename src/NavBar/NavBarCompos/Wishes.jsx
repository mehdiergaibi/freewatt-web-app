import react from 'react'
import { useStateValue } from '../../ContextProvider';
import "./cart.css"
import WishProduct from './WishProduct';

const Wishes = (props) => {

    const [{ wishes }, dispach] = useStateValue(); 
    return(
        <div className='cart-left'>
            {
                wishes.map((product) => 
                   (
                    <WishProduct id={product.id} key={product.id} title={product.title} image={product.image} />
                ))
            }
        </div>
    )
}
export default Wishes
