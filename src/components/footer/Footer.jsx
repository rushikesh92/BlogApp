import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-slate-800/10 border border-t-2 border-t-black">
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="-m-6 flex flex-wrap">
                    <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                        <div className="flex h-full flex-col justify-around">
                            <div className="mb-4 inline-flex items-center">
                                <Logo width="100px" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-300">
                                    &copy; Copyright 2025. All Rights Reserved by  <a href="https://github.com/rushikesh92" className='font-semibold tracking-wider font-sans'  target="_blank"
              rel="noopener noreferrer"> Rushikesh</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-400">
                                Company
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-300 hover:text-gray-200"
                                        to="/info#features"
                                    >
                                        Features
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-300 hover:text-gray-200"
                                        to="/info#pricing"
                                    >
                                        Pricing
                                    </Link>
                                </li>
                              
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-400">
                                Support
                            </h3>
                            <ul>
                              
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-300 hover:text-gray-200"
                                        to="/info#faq"
                                    >
                                        FAQ
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-300 hover:text-gray-200"
                                        to="/info#contact"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-400">
                                Legals
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-300 hover:text-gray-200"
                                        to="/info#terms"
                                    >
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                              
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Footer