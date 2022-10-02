import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase'

export const authContext = createContext()

export const useAuth = () => {
    const context = useContext(authContext)
    if(!context) throw new Error('Not auth proviader')
    return context
}

export const AutoProvider = ({ children }) => {
    const Signup = (email, password) => {
      return  createUserWithEmailAndPassword( auth, email, password )
    }

   return ( 
    <authContext.Provider value={{ Signup }}>
        {children}
    </authContext.Provider>
   )
}

