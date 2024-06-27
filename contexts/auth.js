import React from 'react';
import { createSession, getSession, deleteSession } from '../utils/Anahita';

// heavily inspired from https://docs.expo.dev/router/reference/authentication/

const signIn = (username, password) => {

}

const AuthContext = React.createContext({
    signIn: createSession,
    signOut: deleteSession,
    currentUser: getSession,
    session: null,
    isLoading: false
});

export function useSession() {
    const value = React.useContext(AuthContext);

    return value;
}

export function SessionProvider({children}) {
    const value = {
        signIn: createSession,
        signOut: deleteSession,
        currentUser: getSession,
        session: null,
        isLoading: false
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}