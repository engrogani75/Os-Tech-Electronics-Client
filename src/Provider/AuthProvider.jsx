import { createContext, useState } from "react"
import app from "../Firebase/firebase.config"
import { createUserWithEmailAndPassword, getAuth, sendSignInLinkToEmail } from "firebase/auth";
import PropTypes from 'prop-types';

export const AuthContex = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const [loader, setLoder] = useState(true)

    const [passwordError, setpasswordError] = useState(null)

    const creatUser = (eamil, password) =>{
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

const userInfo = {
    user,
    loader,
    creatUser,
    passwordError

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