import { react, useState } from "react";
import "./login.css"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
const Login = () => {
    const [emailLogin, setEmailLogin] = useState("");
    const [passLogin, setPassLogin] = useState("");
  
    const login = async () => {
      try {
        const user = await signInWithEmailAndPassword(auth, emailLogin, passLogin);
        console.log(user);
      } catch (error) {
        alert(error.message);
      }
    };
    return(
        <div className="login" >
            <h3 className="logun-title">Login</h3>
            <input type="email" placeholder="Enter your email" className="email" onChange={(e) => setEmailLogin(e.target.value)} />
            <input type="password" placeholder="enter your password" className="pass" onChange={(e) => setPassLogin(e.target.value)} />
            <button className="login-button" onClick={login} >Login</button>
        </div>
    )
}
export default Login;