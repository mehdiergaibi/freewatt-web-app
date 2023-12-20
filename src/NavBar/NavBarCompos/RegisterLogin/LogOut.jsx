import { react, useState } from "react";
import "./signout.css"
import { auth } from "../../../firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
const LogOut = () => {

    const [user, setUser] = useState({});
    
    onAuthStateChanged( auth, (currentUser) => {
        setUser(currentUser);
    } )

    const logOut = async () =>{
        await signOut(auth); 
    }
    return(
        <div className="sign-out" >
            <button onClick={logOut} >Log out as</button> <span>{ user?.email }</span>
        </div>
    )
}
export default LogOut;