import { createContext, useContext, useEffect, useState} from 'react';
import { createSession, getSession, deleteSession } from '../api/people';

// heavily inspired from https://docs.expo.dev/router/reference/authentication/

const AuthContext = createContext({
    signIn: () => {},
    signOut: () => {},
    getSession: () => {},
    currentUser: null,
    isLoading: false
});

export function useSession() {
    const value = useContext(AuthContext);

    return value;
}

export function SessionProvider({children}) {
    const [currentUser, setCurrentUser] = useState(null);
    const [isLoading, setLoading] = useState(true);

    const setupCurrentUser = async () => {
        try {
            const session = await getSession();
            setCurrentUser(session);
        } catch (error) {
            setCurrentUser(null);
        }
        
        setLoading(false);
    }

    useEffect(() => {
        setupCurrentUser();
    }, []);

    const signIn = async (username, password) => {
        setLoading(true);

        try {
            const session = await createSession(username, password)
            setCurrentUser(session);
            return session;
        } catch (error) {
            setCurrentUser(null);
            return false;
        } finally {
            setLoading(false);
        }             
    }

    const signOut = () => {
        setLoading(true);
        console.log('auth.signOut');
        deleteSession().then((result) => { 
            console.log(result);
            setLoading(false);
            setCurrentUser(null);
        });
    }

    const value = {
        signIn,
        signOut,
        getSession,
        currentUser,
        isLoading
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}