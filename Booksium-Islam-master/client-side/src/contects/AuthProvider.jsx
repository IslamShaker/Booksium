import React, { createContext, useState } from'react'
import app from '../firebase/firebase.config'
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth"

export const AuthContext =createContext();
const auth =getAuth(app);

const AuthProvider =({children})=>{
    const [user,setUser]=useState(null);
    const[loading ,setLoading]=useState(true);

    const creatUser =(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
     
    const authInfo={
        creatUser
    }
    return(
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    )
}
export default AuthProvider