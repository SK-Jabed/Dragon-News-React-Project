import { useState } from "react";
import { createContext } from "react";

export const authContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const authData = {
        user,
        setUser
    }

    return (
        <div>
            <authContext.Provider value={authData}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;