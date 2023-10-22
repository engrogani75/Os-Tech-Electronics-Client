import { createContext, useEffect, useState } from "react"
import app from "../Firebase/firebase.config"
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendSignInLinkToEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import PropTypes from 'prop-types';

export const AuthContex = createContext(null)
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const [loader, setLoder] = useState(true)

    const [passwordError, setpasswordError] = useState(null)

   

    const creatUser = (email, password) =>{
        setLoder(true)

    
       
        if (password.length < 6) {
            return setpasswordError('pls give at least six caracter')
        }

        else if(!/[A-Z]/.test(password)){

            return setpasswordError('pls give at least capital caracter')
        }
      
        else if(!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)){
            return setpasswordError('pls give at least specal caracter')
        } 

        else{
            setpasswordError('')
            return createUserWithEmailAndPassword(auth, email, password);

     }
    }

    const logInUser = (email, password) =>{
        setLoder(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() =>{
        const unsubscrive = onAuthStateChanged(auth, (currentUser) =>{
               setUser(currentUser)  
               setLoder(false) 
               
        })
    
        return () =>{
            unsubscrive();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    const loginWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider)
    }


  


    const logout = () =>{
        setLoder(true)
        signOut(auth)
    }



const userInfo = {
    user,
    loader,
    creatUser,
    logInUser,
    loginWithGoogle,
    logout,
    passwordError,
  

}

  return (
    <AuthContex.Provider value={userInfo}>
        {children}

    </AuthContex.Provider>
  )
}

export default AuthProvider
AuthProvider.propTypes = {

    children: PropTypes.node
}