import React from 'react'

function Hero() {
    return (
            <div className='flex flex-col items-center justify-center gap-5'>
                <h1 className=' text-3xl sm:text-4xl font-bold '>Welcome to the BlogBit!</h1>
                <p className=' w-2/3 sm:w-1/2 text-center text-xl sm:text-2xl font-[sans] font-extralight text-violet-100'>A little corner of the web where ideas turn into words, and words spark thoughts.
                    Here, you’ll find stories, insights, and experiment. sometimes simple, sometimes bold, but always real.
                    Grab a cup of coffee, scroll through, and let’s explore together.</p>
            </div>
    )
}

export default Hero