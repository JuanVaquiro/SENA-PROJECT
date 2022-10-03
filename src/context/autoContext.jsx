import { createContext, useContext, useEffect, useState } from "react";
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail
} from "firebase/auth";
import { auth } from '../firebase'

export const authContext = createContext()

export const useAuth = () => {
    const context = useContext(authContext)
    if(!context) throw new Error('Not auth proviader')
    return context
}

export const AutoProvider = ({ children }) => {
    const [User, setUser] = useState(null)
    const [Loading, setLoading] = useState(true)

    const Signup = (email, password) => {
      return  createUserWithEmailAndPassword( auth, email, password )
    }

    const Login = (email, password) => signInWithEmailAndPassword(auth, email, password )

    const LoginWithGoogle = () => {
      const googlProvider = new GoogleAuthProvider()
      return signInWithPopup(auth, googlProvider)
    }

    const Logout = () => signOut(auth)

    const ResetPassword = (email) => sendPasswordResetEmail(auth, email)

    useEffect(() => {
      const unsubScribe = onAuthStateChanged(auth, (updateCurrentUser) => {
        setUser(updateCurrentUser)
        setLoading(false)
      })

      return () => unsubScribe()
    }, [])
    
   return ( 
    <authContext.Provider value={{ Signup, Login, User, Logout, Loading, LoginWithGoogle, ResetPassword }}>
        {children}
    </authContext.Provider>
   )
}

