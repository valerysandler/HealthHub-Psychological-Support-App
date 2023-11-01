import React from 'react'
import logo from '../assets/logo.png';

const Logo = () => {
    return (
        <div className='py-5 '> 
            <img src={logo} alt="logo" className="mx-auto h-20 w-auto" />
            <span className="
                text-center text-4xl font-bold leading-9 tracking-tight text-purple-700
                ">HealtHub</span>
        </div>
    )
}

export default Logo