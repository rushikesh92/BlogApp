import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login as storeLogin } from '../store/authSlice'
import { Button, Input, Select, Logo } from './index'
import authService from '../appwrite/auth'
import { set, useForm } from 'react-hook-form'
function  Signup() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {register, handleSubmit} = useForm();
  const [error, setError] = useState("");
    const [signupDisabled, setSignupDisabled] = useState(false);

  const signup = async (data) => {
    setError("");
    setSignupDisabled(true);
    try {
      const userAccount = authService.createAccount(data);

      if (userAccount) {
        const userData = await authService.getCurrentUser();

        if (userData) {
          dispatch(storeLogin(userData))
        }
        navigate("/")
      }
    } catch (error) {
      setError(error)
      setSignupDisabled(false);
    }
  }
  return (
    <div
      className='flex items-center justify-center w-full'
    >
      <div className={`mx-auto w-full max-w-lg bg-gray-500/30 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Create new account</h2>
        <p className="mt-2 text-center text-base text-white/70">
          Already have a account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Log In
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        <form onSubmit={handleSubmit(signup)} className='mt-8'>
          <div className="space-y-5 mt-2">
            <Input
              label='Name: '
              placeholder='Enter your name'
              type='text'
              {...register('name', {
                required: true,
              })
              }
            />
          </div>
          <div className="space-y-5 mt-2">
            <Input
              label='Email: '
              placeholder='Enter your email'
              type='email'

              //using react-hook-form
              {...register('email', {
                required: true,
                validate: {
                  matchPattern: (value) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
                    .test(value) || "Email address must be valid"
                }
              })
              }
            />
          </div>
          <div className="space-y-5 mt-2">
            <Input
              label='Password: '
              placeholder='Enter your password'
              type='password'
              {...register('password', {
                required: true,
              })
              }
            />
          </div>
          <Button type='submit' className='w-full' isDisabled={signupDisabled}>Create Account</Button>
        </form>

      </div>

    </div>
  )
}

export default Signup