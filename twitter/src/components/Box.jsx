import { useContext } from "react";
import CreateTweet from "./CreateTweet"
import Login from "./Login"
import { AuthContext } from "../context/AuthContext";

function Box() {

    const { user } = useContext(AuthContext); 

    return( <div>
        {
            user ? <CreateTweet/> : <Login/>
        }

    </div>
                
    )


}

export default Box