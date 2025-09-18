import React, { useState, useEffect } from 'react'
import { Profile as ProfileComponent, Container, PostCard } from '../components'
import { useSelector } from 'react-redux'
function Profile() {
    const [userPosts, setUserPosts] = useState([])
    const authStatus = useSelector((state) => state.auth.status)
    const userData = useSelector((state) => state.auth.userData)
    const posts = useSelector((state)=>(state.post.posts));


    // Filter posts for logged-in user
    useEffect(() => {
        if (authStatus && userData) {
            setUserPosts(posts.filter((post) => post.userId === userData.$id))
        }
    }, [authStatus, userData, posts])

    return (

        <div className="py-8 min-h-[65vh]">
            <Container>
                {!authStatus || !userData ? (
                    <p className="text-center">Please login to view your profile.</p>
                ) : (
                    <div>
                        <ProfileComponent />
                        <h1 className='text-2xl font-bold ml-2 mt-4'>Your Blogs</h1>
                        <div className='flex flex-wrap text-center '>
                            {userPosts.length === 0 ? (
                                <p className='my-5 '>You haven't created any blogs</p>
                            ) :
                                (userPosts.map((post) => {

                                    return (<div key={post.$id} className='p-2 w-1/4'>
                                        <PostCard {...post} />
                                    </div>)
                                })
                                )
                            }
                        </div>
                    </div>
                )}
            </Container>
        </div>
    )
}

export default Profile