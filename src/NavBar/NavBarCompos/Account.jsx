import react from 'react'
import Register from './RegisterLogin/Register'
import Login from "./RegisterLogin/Login"
import LogOut from "./RegisterLogin/LogOut"
import "./Account.css"

const Account = () => {

    return(
        <>
            <div className='account'>
                <Register />
                <Login />
            </div>
            <LogOut className="log-out" />

        </>
        
    )
}
export default Account
