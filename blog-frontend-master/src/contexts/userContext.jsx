import react, { createContext, useContext, useState } from "react"


const UserContext = createContext();

export const UserProvider = ({children}) =>{
    const [user, setUser] = useState(null);
    const [blogs , setBlogs] = useState([]);
    const [isAdmin , setIsAdmin] = useState(false);
    const [requests , setRequests] = useState([]);

    return <UserContext.Provider value={{user , setUser , blogs , setBlogs , isAdmin , setIsAdmin , requests , setRequests}}>
        {children}
    </UserContext.Provider>
}

export const useUser = ()=>{
    return useContext(UserContext);
}