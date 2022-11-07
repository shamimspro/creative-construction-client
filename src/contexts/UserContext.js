import React, {createContext} from 'react';

export const AuthContext = createContext();

const UserContext = ({children}) => {
    const myName = "Shamim Sarker";

    const authInfo = {
        myName
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;