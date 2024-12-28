import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [signIn , setSignIn]= useState(true)
    const handleToggle = () => {
        setSignIn(!signIn)
    }
  return (
    <div >
        <Header />
        <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_small.jpg"
        alt="logo"/>
        </div>
        <form className=' w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
            <h1 className='text-2xl  py-4 font-bold'>
                {signIn?"SignIn" : "SignUp"}
            </h1>
            {!signIn? 
            <input type='text' placeholder='UserName' className='w-full p-4 my-4 bg-gray-700 rounded-lg'/> 
            : null}
            <input type='email' placeholder='Email'className='w-full p-4 my-4 bg-gray-700 rounded-lg'/>
            <input type='password' placeholder='Password' className='w-full p-4 my-4 bg-gray-700 rounded-lg'/>
            <button className='p-4 m-y4 w-full bg-red-800'>{signIn?"SignIn":"SignUp"}</button>
            <p className="cursor-pointer py-4" onClick={handleToggle}>
                {signIn ?"New to Netflix? SignUp Now" : "Already existing user? SignIn"}
            </p>
        </form>
      
    </div>
  )
}

export default Login