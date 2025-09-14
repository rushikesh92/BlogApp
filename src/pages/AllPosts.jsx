import React, {useState,useEffect} from 'react'
import appwriteService from '../appwrite/config'
import { Container,PostCard } from '../components';
function AllPosts() {

    const [posts,setPosts]=useState([]);

    useEffect(()=>{
        appwriteService.getPosts().then((posts)=>{
            if(posts){
                setPosts(posts.documents)
            }
        })
    },[])

  return (
    <div className="w-full py-8 min-h-[50vh]">
        <Container>
            <h1 className='text-2xl font-bold text-center my-3'>All Posts</h1>
            <div className="flex flex-wrap gap-2">
                {posts.length === 0 && <p>No posts found.</p>}
                {posts.map((post)=>(
                    <div key={post.$id} className='w-1/3'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
        </Container>
    </div>
)
}

export default AllPosts