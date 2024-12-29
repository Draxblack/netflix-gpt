import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO_URL } from '../utils/constants';
const Header = () => {
    const navigate = useNavigate()
     const dispatch = useDispatch()
    const user = useSelector(store=> store.user)
    const handleSignOut =() =>{
        
    signOut(auth).then(() => {
    
    }).catch((error) => {
  // An error happened.
    });
    }
    useEffect(()=>{
       const unsubscribe =  onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid, email, displayName, photoURL} = user;
              // ...

              dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}))
              navigate('/browse')
            } else {
              // User is signed out
              // ...
              dispatch(removeUser())
              navigate('/')
            }
          });
          //unsubscribe after component is unmounted
        
          return ()=> unsubscribe()
    }, [])
    
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img className='w-40'
         src={LOGO_URL}
        alt='logo'/>
    
    {user &&(<div className=' flex p-2'>
    <img 
    className='w-12 h-12'
    src={user.photoURL}
    alt='profile'/>
    <button className='font-bold text-white'
     onClick={handleSignOut}>Sign Out</button>
    </div>)}
</div>
  )
}

export default Header