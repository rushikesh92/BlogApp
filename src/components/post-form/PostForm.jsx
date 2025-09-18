import React, { useCallback, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Button, Input, Select, RTE } from '../index'
import appwriteService from '../../appwrite/config'


function PostForm({ post }) {

  const [buttonDisabled,setButtonDisabled]=useState(false);

  const { register, handleSubmit, watch, setValue, control, getValues, reset } = useForm(
    {
      defaultValues: {
        title: post?.title || "",
        slug: post?.slug || "",
        content: post?.content || "",
        status: post?.status || "active",

      }
    }
  )
  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");

    return "";
  }, []);
  // when post is available, reset form values
  React.useEffect(() => {
    if (post) {
      reset({
        title: post.title || "",
        slug: post.slug || "",
        content: post.content || "",
        status: post.status || "active",
      });
      // force slug to appear on first load
      setValue("slug", post.slug || slugTransform(post.title || ""), {
        shouldValidate: true,
      });
    }
  }, [post, reset, slugTransform]);

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const submit = async (data) => {
    setButtonDisabled(true);
    if (post) {//if post already exists(provided while using this form )

      const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null//upload file in appwrite storage

      if (file) {
        await appwriteService.deleteFile(post.featuredImage);//delete old image
      }

      const dbPost = await appwriteService.updatePost
        (post.$id, {
          ...data,
          featuredImage: file ? file.$id : post.featuredImage
        })
      //(post.$id gives slug i.e. id of post from appwrite(using $ is appwrite syntax) )

      //redirect
      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    }
    else {//creating new post from scratch
      let file = null;
      try {


        file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null//upload file in appwrite storage

        if (file) {//as image is must

          data.featuredImage = file.$id;
          const dbPost = await appwriteService.createPost({
            ...data,
            userId: userData.$id
          })
          //redirect
          if (dbPost) {
            navigate(`/post/${dbPost.$id}`);
          }
          else {
            if (file) {
              await appwriteService.deleteFile(file.$id);
            }
          }
        }
      } catch (error) {
        console.error("Post creation failed:", error);
        if (file) {
          await appwriteService.deleteFile(file.$id);
        }

      }
    }
  }


  React.useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);
  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap min-h-[50vh] p-4 mt-3 mb-8 bg-blue-300/10 rounded-2xl">
      <div className="w-2/3 px-2">


        <h1 className='font-bold text-xl mt-2 mb-2'> {post ? "Update Blog" : "Create Blog"}</h1>
        <Input
          label="Title :"
          placeholder="Title"
          className="mb-4"
          {...register("title", { required: true })}
        />
        <Input
          label="Slug :"
          placeholder="Slug"
          className="mb-4"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
          }}
        />
        <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
      </div>
      <div className="w-1/3 px-2 pt-11">
        <Input
          label="Featured Image :"
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !post })}
        />
        {post && (
          <div className="w-full mb-4">
            <img
              src={appwriteService.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="rounded-lg"
            />
          </div>
        )}
        <Select
          options={["active", "inactive"]}
          label="Status"
          className="mb-4"
          {...register("status", { required: true })}
        />
        <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full" isDisabled={buttonDisabled}>
          {post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  )
}

export default PostForm