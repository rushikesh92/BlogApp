import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config";
import { Container, PostCard, Hero } from '../components'
import { useSelector } from 'react-redux';

function Home() {
    const authStatus = useSelector((state) => state.auth.status)
    const posts = useSelector((state)=>(state.post.posts));


    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center min-h-[50vh] ">
                <Hero />
                <Container>

                    <div className="flex flex-wrap mt-10">
                        <div className="p-2 w-full">
                            <h1 className="text-xl  hover:text-gray-300">
                                {
                                    authStatus && <p>No posts available</p>
                                }
                                {
                                    !authStatus && <p>Login to explore hundreds of Blogs</p>
                                }
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8 min-h-[50vh]  flex flex-col items-center justify-center gap-10'>
            <Hero />
            <Container>
                <h1 className='text-2xl font-bold text-center'>Blogs for you</h1>
                <div className='flex flex-wrap mt-3'>
                    {posts.length > 0 && posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home