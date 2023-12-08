import React, { createContext, useState } from'react'
import app from '../firebase/firebase.config'
import {GoogleAuthProvider,createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup} from "firebase/auth"

export const AuthContext =createContext();
const auth =getAuth(app);


///////////////// vedio 6:06:20    //////////////////
//sign in is removed when addind this code

// const googleProvider =new googleProvider();
// /////////////////////////////////////////////////
const AuthProvider =({children})=>{
    const [user,setUser]=useState(null);
    const[loading ,setLoading]=useState(true);

    const creatUser =(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
      
    const loginWithGoogle=()=>{
      setLoading(true);
     return  signInWithPopup(auth, googleProvider)
    }
    

    const login =(email,password)=>{
        return   signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
        const unsubiscribe = onAuthStateChanged(auth,currentUser=>{
            // console.log(currentUser);
            setUser(creatUser);
            setLoading(false);
                });
           return()=>{
            return unsubiscribe();
           }     
    },[])
    const authInfo={
        user,
        creatUser,
        loginWithGoogle,
        loading
    }
    return(
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    )
}
export default AuthProvider