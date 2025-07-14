import { createContext, useState } from "react";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    
    const [userName, setUserName] = useState("Anil Kumar");

    const login = (value) => {
        setUserName(value);
    }

    return (
        <UserContext.Provider value={{ userName, login }}>
            {children}
        </UserContext.Provider>);
}

export { UserContextProvider, UserContext };