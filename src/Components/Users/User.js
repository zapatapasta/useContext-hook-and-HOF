import React, { useContext } from "react";
import SubUser from "./SubUser";
import { UsernameContext } from "../Contexts/UsernameContext";

export default function User() {

    const username = useContext(UsernameContext)

    return(
        <div>
            <h2>User: {username}</h2>
            <SubUser />
        </div>
    )
};
