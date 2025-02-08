"use client"
import React,{ReactNode} from "react";
import { Provider as ReduxProvider } from "react-redux";
import store from "./store";

interface Providerprops{
    children: ReactNode;
}

const Provider:React.FC<Providerprops> = ({ children }) => {
    return(
     <ReduxProvider store={store}>{children}</ReduxProvider>
    );

};

export default Provider;