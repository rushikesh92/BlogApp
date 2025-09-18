import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login as storeLogin } from '../store/authSlice'
import { Button, Input, Select, Logo } from './index'
import authService from '../appwrite/auth'
import { useForm } from 'react-hook-form'
function Signup() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const [error, setError] = useState("");
  const [step, setStep] = useState(1);
  //step 1 => name & email input 2 => Otp verification 3 => set password 
  const [userId, setUserId] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [signupDisabled, setSignupDisabled] = useState(false);
  const [verifyDisabled, setVerifyDisabled] = useState(false);
  const [continueDisabled, setContinueDisabled] = useState(false);


  const signup = async (data) => {
    setError("");
    setSignupDisabled(true);
    try {
      const result = await authService.requestOTP(data.email);

      if (result) {
        setUserId(result.userId);
        setName(data.name);
        setStep(2);
      }

    } catch (error) {
      setError(error.message || "Something went wrong");
      setSignupDisabled(false);
    }
  }

  const handleOTPSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setVerifyDisabled(true);
    try {
      const session = await authService.verifyOTP(userId, otp);
      if (session) {
        setStep(3);
      }
      else {
        setError("OTP verification failed")
        setVerifyDisabled(false);

      }
    } catch (error) {
      setError(error.message || "Something went wrong");
      setVerifyDisabled(false);

    }
  }
  const handlePasswordSubmit = async (e) => {
    setError("")
    e.preventDefault();
    setContinueDisabled(true);
    try {
      await authService.setName(name);
      await authService.setPassword(password);
      const userData = await authService.getCurrentUser();
      if (userData) {
        dispatch(storeLogin(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message || "Something went wrong");
      setContinueDisabled(false);
    }
  };

  return (

    <div className="flex items-center justify-center w-full">
      <div className="mx-auto w-full max-w-lg bg-gray-500/30 rounded-xl p-10 border border-black/10">
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Create new account
        </h2>
        <p className="mt-2 text-center text-base text-white/70">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Log In
          </Link>
        </p>

        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        {step === 1 && (
          <form onSubmit={handleSubmit(signup)} className="mt-8">
            <div className="space-y-5 mt-2">
              <Input
                label="Name:"
                placeholder="Enter your name"
                type="text"
                {...register("name", { required: true })}
              />
            </div>
            <div className="space-y-5 mt-2">
              <Input
                label="Email:"
                placeholder="Enter your email"
                type="email"
                {...register("email", {
                  required: true,
                  validate: {
                    matchPattern: (value) =>
                      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value) ||
                      "Email address must be valid",
                  },
                })}
              />
            </div>
            <Button
              type="submit"
              className="w-full"
              isDisabled={signupDisabled}
            >
              Create Account
            </Button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleOTPSubmit} className="mt-4">
            <p className="text-sm text-white/70 text-center mb-4">
              Enter the OTP sent to your email
            </p>
            <Input
              // label="OTP:"
              placeholder="Enter the 6-digit code"
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <Button type="submit" className="w-full mt-4" isDisabled={verifyDisabled}>
              Verify OTP
            </Button>
          </form>
        )}

        {step === 3 && (
          <form onSubmit={handlePasswordSubmit} className="mt-4">
            <p className="text-sm text-white/70 text-center mb-4">
              Set your password 
            </p>
            <Input
              label="Password:"
              placeholder="Enter your password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" className="w-full mt-4" isDisabled={continueDisabled}>
              Continue
            </Button>
          </form>
        )}
      </div>
    </div>
  );


}

export default Signup