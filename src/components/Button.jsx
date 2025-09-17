import React from 'react'

function Button({
    children,
    type='button',
    bgColor='bg-blue-500',
    textColor='text-white',
    className='',
    isDisabled=false,
    ...props

}) {
  return (
    <button className={`px-4 py-2 rounded-lg mt-4 ${bgColor} ${textColor} ${className} disabled:disabled:bg-gray-400 
    disabled:cursor-not-allowed 
    disabled:opacity-50`} {...props}  disabled={isDisabled}>
        {children}
    </button>
  )
}

export default Button