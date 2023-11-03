import React from 'react'
interface ButtonProps {
    text: string
    onClick: () => void
}

const Button = (props: ButtonProps) => {

    return (
        <div>
            <button onClick={props.onClick} className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-purple-900 border border-purple-300 rounded-lg hover:bg-purple-100 focus:ring-4 focus:ring-gray-100 dark:text-purple-900 dark:purpe-gray-700 dark:hover:bg-purple-00 dark:focus:ring-gray-800">{props.text}</button>
        </div>
    )
}

export default Button