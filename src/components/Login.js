import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from '../utils/firebase'

import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { BG_IMG, USER_AVATAR } from '../utils/constants';
const Login = () => {
    const [signIn , setSignIn]= useState(true)
    const dispatch = useDispatch()
    const [errormessage, setErrorMessage] = useState(null)
    
    const handleToggle = () => {
        setSignIn(!signIn)
    }
    const name = useRef(null)
    const email= useRef(null)
    const password = useRef(null)
    const handleButton = () => {
        const message = checkValidData(email.current.value, password.current.value)
        setErrorMessage(message)
        if(message) return
        if(!signIn){
            createUserWithEmailAndPassword(auth,email.current.value, password.current.value)
            .then((userCredential) => {
              // Signed up 
              const user = userCredential.user;
              
              updateProfile(user, {
                displayName: name.current.value,
                 photoURL: USER_AVATAR
                
              }).then(() => {
                const {uid, email, displayName, photoURL} = auth.currentUser;
                              // ...
                
                              dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}))
                
                
              }).catch((error) => {
                // An error occurred
                // ...
              });
             
              // ...
             
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              // ..
              setErrorMessage(errorMessage+'-'+errorCode)
            }); 
        }
        else{
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
        }
    }
  return (
    <div >
        <Header />
        <div className='absolute'>
        <img src={BG_IMG}
        alt="logo"/>
        </div>
        <form onSubmit={(e)=>e.preventDefault()}className=' w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
            <h1 className='text-2xl  py-4 font-bold'>
                {signIn?"SignIn" : "SignUp"}
            </h1>
            {!signIn? 
            <input ref={name}type='text' placeholder='UserName' className='w-full p-4 my-4 bg-gray-700 rounded-lg'/> 
            : null}
            <input ref={email} type='email' placeholder='Email'className='w-full p-4 my-4 bg-gray-700 rounded-lg'/>
            <input ref = {password}type='password' placeholder='Password' className='w-full p-4 my-4 bg-gray-700 rounded-lg'/>
            <p className='p-4 m-y4 w-full text-red-800'>{errormessage}</p>
            <button className='p-4 m-y4 w-full bg-red-800' onClick={handleButton}>{signIn?"SignIn":"SignUp"}</button>
            <p className="cursor-pointer py-4" onClick={handleToggle}>
                {signIn ?"New to Netflix? SignUp Now" : "Already existing user? SignIn"}
            </p>
        </form>
      
    </div>
  )
}

export default Login