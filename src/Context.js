import React from "react";
const {Provider, Consumer}= React.createContext()

function ContextProvider({children}){

    
    return(
    <Provider value = "">{children}</Provider>
    )
}
export {ContextProvider}