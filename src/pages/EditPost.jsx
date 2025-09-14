import React, { useState, useEffect } from 'react'
import { Container, PostForm } from '../components'
import { useNavigate, useParams } from 'react-router-dom'
import appwriteService from '../appwrite/config';

function EditPost() {

    const [post, setPost] = useState(null);

    const navigate = useNavigate();

    const slugObj = useParams();//extract slug from url clicked by user
    const slug =slugObj.slug;
    
    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPost(post);
                }
            })
        }
        else {
            navigate('/')
        }
    },[slug ,navigate]);


    return (
        <Container>
            <PostForm post={post} />
        </Container>
    )
}

export default EditPost