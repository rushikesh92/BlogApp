import React, {useState,useEffect} from 'react'
import { Container,PostCard } from '../components';
import { useSelector } from 'react-redux';

function AllPosts() {

    const posts = useSelector((state)=>(state.post.posts));

  return (
    <div className="w-full py-5  min-h-[65vh]">
        <Container>
            <h1 className='text-2xl font-bold text-center my-6'>Blogs For You</h1>
            <div className="w-full flex flex-wrap gap-2   justify-evenly">
                {posts.length === 0 && <p>No posts found.</p>}
                {posts.map((post)=>(
                    <div key={post.$id} className='w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
        </Container>
    </div>
)
}

export default AllPosts