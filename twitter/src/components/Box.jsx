import { useContext } from "react";
import CreateTweet from "./CreateTweet"
import { AuthContext } from "../context/AuthContext";
import LogReg from "./LogReg";

function Box() {

    const { user } = useContext(AuthContext); 

    return( <div>
        {
            user ? <CreateTweet/> : <LogReg/>
        }

    </div>
                
    )


}

export default Box