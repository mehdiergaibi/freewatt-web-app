import { react, useState } from "react";
import "./register.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
const Register = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, pass);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="register">
      <h3 className="register-title">Register Now</h3>
      <input
        type="email"
        placeholder="Enter your email"
        className="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="enter a password"
        className="pass"
        onChange={(e) => setPass(e.target.value)}
      />
      <button className="register-button" onClick={register}>
        Register
      </button>
    </div>
  );
};
export default Register;
