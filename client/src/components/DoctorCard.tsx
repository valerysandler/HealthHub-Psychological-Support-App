import React from 'react'

interface DoctorCardProps {
    name: string,
    speciality: string,
    rating: number,
    image: string,
    onClick: () => void
}

const DoctorCard = (props: DoctorCardProps) => {
    return (
        // Create big card with doctor data and button to book appointment with him and his rating and last seen and register to consultation 
        <div className="flex flex-col w-full max-w-xl  overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 mx">
            <img className="object-cover w-full h-56" src={props.image} alt="avatar" />
            <div className="flex flex-col justify-center w-full px-6 py-4">
                <h1 className="mt-2 text-xl font-medium text-gray-800 dark:text-white">{props.name}</h1>
                <p className="text-sm font-medium text-gray-400">{props.speciality}</p>
                <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                    <svg className="w-4 h-4 mr-2 text-purple-600 fill-current" viewBox="0 0 24 24">
                        <path
                            d="M12 4C14.7614 4 17 6.23858 17 9C17 11.7614 14.7614 14 12 14C9.23858 14 7 11.7614 7 9C7 6.23858 9.23858 4 12 4Z"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd
                        "
                            d="M12 1C16.9706 1 21 5.02944 21 10C21 14.9706 16.9706 19 12 19C7.02944 19 3 14.9706 3 10C3 5.02944 7.02944 1 12 1ZM12 17C15.866 17 19 13.866 19 10C19 6.13401 15.866 3 12 3C8.13401 3 5 6.13401 5 10C5 13.866 8.13401 17 12 17Z"
                            fill="currentColor"
                        />
                    </svg>
                    <p className="">{props.rating}</p>
                </div>
                {/* Create div registration to consultation , Select desired date and time  */}
                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center">
                        <svg className="w-4 h-4 mr-2 text-purple-600 fill-current" viewBox="0 0 24 24">
                            <path
                                d="M19 12H5M12 5L5 12L12 19"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-200">Select desired date and time</p>
                    </div>
                    <span className="text-sm font-medium text-gray-400">Last seen 2 hours ago</span>
                </div>
                <button
                    className="px-4 py-2 mt-4 text-sm font-medium text-white transition-colors duration-200 transform bg-purple-600 rounded-md hover:bg-purple-500 focus:outline-none focus:bg-purple-500"
                    onClick={props.onClick}
                >
                    Book Appointment
                </button>
            </div>
        </div>
    )
}

export default DoctorCard