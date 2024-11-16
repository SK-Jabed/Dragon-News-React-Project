import { useEffect, useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../firebase/firebase.config";

export const authContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    console.log(user);

    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const authData = {
      user,
      setUser,
      createNewUser,
    };

    return (
        <div>
            <authContext.Provider value={authData}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;