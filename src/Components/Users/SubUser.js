import React, { useContext } from "react";
import { UsernameContext } from "../Contexts/UsernameContext";

export default function SubUser() {

    const username = useContext(UsernameContext)

    return(
        <div>
            <h2>SubUser: {username}</h2>
        </div>
    )
};
