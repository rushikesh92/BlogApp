import React,{useState} from 'react'
import pfp from '../assets/pfp.svg'
import { useSelector } from 'react-redux';
function Profile() {
    const authStatus = useSelector((state) => state.auth.status)

    let userData=null;
    if(authStatus){
                 userData = useSelector((state) => state.auth.userData)
                 console.log(userData)
    }

    if (!userData) {
        return (
            <div className='flex m-3 mt-1   bg-slate-500/30 rounded-xl min-h-[50vh] '>
                <p>Error loading user profile</p>
            </div>
        )
    }
    return (
        <div className='flex m-3 mt-1   bg-slate-500/30 rounded-xl'>
           <div className='flex gap-2 p-3 items-center'>
                <img src={pfp} alt="profile picture" className='w-[100px]' />
                <div>
                 <p className='text-xl font-bold'>{userData.name}</p>
                    <p>{userData.email}</p>
                </div>
           </div>
        </div>
    )
}

export default Profile