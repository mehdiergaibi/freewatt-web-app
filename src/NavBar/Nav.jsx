import MessageBar from "./MessageBar"
import NavBar from "./NavBar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from "./NavBarCompos/Products";
import About from "./NavBarCompos/About";
import Contact from "./NavBarCompos/Contact";
import Search from "./NavBarCompos/Search";
import Account from "./NavBarCompos/Account";
import Wishes from "./NavBarCompos/Wishes";
import Cart from "./NavBarCompos/Cart"

const Nav = () => {

    return(
        <>
            <MessageBar />
            <Router>
                <NavBar />
                <Routes>
                    <Route exact path="/" />
                    <Route path="/all-products" element={<Products/>} />
                    <Route path="/about-us" element={<About/>} />
                    <Route path="/contact-us" element={<Contact/>} />
                    <Route path="/search" element={<Search/>} />     
                    <Route path="/account" element={<Account/>} />
                    <Route path="/wishes" element={<Wishes/>} />
                    <Route path="/cart" element={<Cart/>} />
                </Routes>
            </Router>
            
        </>
    );

}
export default Nav