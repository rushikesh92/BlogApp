import React from 'react'
import { useDispatch } from 'react-redux';
import authService from '../../appwrite/auth';
import { logout } from '../../store/authSlice';

function LogoutBtn() {
  
    const dispatch = useDispatch();

    const logoutHandler =()=>{
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }
  return (
    <button className='inline—bock px—8 py—2 p-2 duration—200 hover:bg-slate-700/50 hover:text-blue-400 cursor-pointer rounded-xl' onClick={logoutHandler}>Logout</button>
  )
}

export default LogoutBtn