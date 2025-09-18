import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage,creator}) {
    
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-blue-300/10 rounded-xl p-4 transform transition duration-300 hover:scale-102'>
            <div className='w-full justify-center mb-4'>
                <img src={appwriteService.getFilePreview(featuredImage)}  alt={title}
                className='rounded-xl ' />

            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
            <p className='text-sm font-extralight font-sans tracking-wider'>{creator && creator}</p>
        </div>
    </Link>
  )
}


export default PostCard