import { useState, useEffect, createContext } from "react";

import { fire, auth, firebase } from "../Config/Firebase";

import Cargando from "../Components/Cargando";


const proveedorGoogle = new firebase.auth.GoogleAuthProvider()

export const AuthContext = createContext()

export const AuthContextProvider = (props) => {
    const [userState,setUserState] = useState(null)
    const[authPending, setAuthPending] = useState(true)

    const signIn = async () => {
        const rpta = await auth.signInWithPopup(proveedorGoogle)
    }

    const signOut = () => auth.signOut()

    useEffect(() => {
        return auth.onAuthStateChanged((user) => {
            setUserState(user)
            setAuthPending(false)
        })
    },[])

    if (authPending) {
        return <Cargando/>
    }



    return(
        <AuthContext.Provider value={{signIn, signOut, userState}} >
            {props.children}
        </AuthContext.Provider>
    )

}

