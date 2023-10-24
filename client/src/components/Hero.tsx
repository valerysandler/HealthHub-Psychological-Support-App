import React from 'react'
import header from '../assets/header.jpg'
import { Link } from 'react-router-dom'

function Hero() {
    return (
        // Hero section with search bar
        <section className="bg-white dark:bg-gray-900">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Virtual Care for Youre Mind and Soul</h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                        "Discover Tranquility: Your Path to Emotional Wellness"
                    </p>
                   
                    <Link to="/register" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-purple-900 border border-purple-200 rounded-lg hover:bg-purple-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        Get started free
                    </Link>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img width={1000} height={1000} src={header} alt="mockup">
                    </img>
                </div>
            </div>
        </section>
    )
}

export default Hero