import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'


function PostForm({post}) {

    const {register,handleSubmit,watch,setValue,control,getValues} = useForm(
        {
            defaultValues:{
                title: post?.title || "",
                slug:  post?.slug || "",
                content: post?.content || "",
                status: post?.status || "active ",

            }
        }
    )

    const navigate = useNavigate();
    const userData = useSelector((state)=> state.auth.userData);
  return (
    <div>PostForm</div>
  )
}

export default PostForm