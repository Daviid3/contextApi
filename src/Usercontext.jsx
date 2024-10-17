import {createContext, useState, useContext} from "react";

// context for the user
const UserContext = createContext()

export const UserProvider = ({children}) => {
const [user, setuser] = useState({firstname:"", lastname:"", email:""})
const login = (firstname, lastname, email) => {
    setuser({
        firstname,lastname,   email,
    });
};
const logout = () => {
    setuser(null)
};

const update = (firstname, lastname, email) => {
    setuser({
        firstname, lastname, email
    })
}
return (
    <UserContext.Provider value={{user, login, logout, setuser, update}}>
        {children}
    </UserContext.Provider>
   
);
};

export const useUser = () => {
    return useContext(UserContext);
};

