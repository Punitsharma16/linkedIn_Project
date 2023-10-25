import { createContext, useState } from "react";

export const MyContext = createContext();

export const MyProvider = ({child})=>{
    const [value, setValue] = useState('');
    return(
        <MyContext.Provider value={{value,setValue}} >
            {child}
        </MyContext.Provider>
    )
}
