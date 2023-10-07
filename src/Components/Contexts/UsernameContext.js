import { createContext } from "react";
import { useState } from "react";
export const UsernameContext = createContext()


const UsernameProvider = ({children}) =>{
    
    const [username,setUsername]= useState("mammad")
    return(
        <UsernameContext.Provider value={username}>
            {children}
        </UsernameContext.Provider>
    )
}

export default UsernameProvider