
import { useState } from "react";
import "./messaage-bar.css"
import { FaXmark } from "react-icons/fa6";


const MessageBar = () => {

    const [visibility, setVisibility] = useState(true);
    const removeMessageBar = () => {
        return setVisibility(false)
    }

    return(
        <>
            {
                visibility &&   <div className="message-bar">
                                   <h4 className="message-bar-title">SAVE UP TO $40 ON ALL PRODUCTS  •  FREE STANDARD SHIPPING  SHOP NOW</h4>
                                    <FaXmark onClick={removeMessageBar} className='close-icon' />
                                </div>
            }
            
        </>

    );

}
export default MessageBar