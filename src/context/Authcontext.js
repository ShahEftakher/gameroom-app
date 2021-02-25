import React, { useContext } from "react";
import {auth} from "../firebase";

const Authcontext = React.createContext();

const useAuthcontext=()=>{
    return useContext(Authcontext);
}


