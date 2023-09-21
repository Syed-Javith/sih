import react, { createContext, useContext, useState } from "react"


const UserContext = createContext();

export const UserProvider = ({children}) =>{
    const [user, setUser] = useState(null);
    const [blogs , setBlogs] = useState([]);

    return <UserContext.Provider value={{user , setUser , blogs , setBlogs}}>
        {children}
    </UserContext.Provider>
}

export const useUser = ()=>{
    return useContext(UserContext);
}