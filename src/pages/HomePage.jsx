import React, { useEffect, useState } from 'react'
import { Container, PostCard, Hero, Button } from '../components'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Home() {
    const authStatus = useSelector((state) => state.auth.status)

        return (
            <div className="w-full py-8 min-h-[85vh]  flex flex-col items-center justify-center gap-6">
                <Hero />
                {
                    <Link to={ authStatus ? `/all-posts`:`/login` }>
                        <Button bgColor="bg-green-600 " className="shadow-lg shadow-gray-800 font-semibold text-lg font-mono hover:scale-102 transition duration-200">
                            Explore Blogs
                        </Button>
                    </Link>
                }
            </div>
        )
    
   
}

export default Home