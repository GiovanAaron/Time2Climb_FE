import React, { createContext, useState, useEffect } from 'react';
import { getAuth } from "firebase/auth";
import app from '../firebaseConfig'

export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        return getAuth(app).onAuthStateChanged((user) => {
            setUser(user);
        });
    }, []);

    return (
        <UserContext.Provider value={{ user }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
