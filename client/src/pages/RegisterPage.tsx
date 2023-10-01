import header_image_register from '../assets/header_register_image.jpg'

export default function RegisterPage() {



    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-1 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-52 w-auto"
                        src={header_image_register}
                        alt="HealthHub Header"
                    />

                    <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-purple-900" >
                        Sign Up for HealthHub
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-3" action="#" method="POST">
                        <div className='flex items-center justify-between'>
                            {/* Fist name input */}
                            <div className='mr-6'>
                            <label className="text-sm font-medium leading-6 text-purple-900">
                                    First Name
                                </label>
                                    <input
                                        id="first_name"
                                        name="first_name"
                                        type="text"
                                        autoComplete="first_name"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-purple-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                                    />
                            </div>
                            {/* Last name input */}
                            <div>
                                <label className="text-sm font-medium leading-6 text-purple-900">
                                    Last Name
                                </label>
                                    <input
                                        id="last_name"
                                        name="last_name"
                                        type="text"
                                        autoComplete="last_name"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-purple-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                                    />

                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label className="block text-sm font-medium leading-6 text-purple-900">
                                    Email
                                </label>

                            </div>
                            <div>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-purple-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label className="block text-sm font-medium leading-6 text-purple-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-purple-600 hover:text-purple-500">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-purple-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label className="block text-sm font-medium leading-6 text-purple-900">
                                    Confirm password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-purple-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        {/* Add toggle if user specialist  */}



                        {/* Add checkbox */}
                        <div className="flex items-center">
                            <input
                                required
                                id="remember_me"
                                name="remember_me"
                                type="checkbox"
                                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                            />
                            <label htmlFor="remember_me" className="ml-2 block text-sm text-purple-900">
                                I agree to the <a href="#" className="font-semibold text-purple-600 hover:text-purple-500">terms and conditions</a>
                            </label>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-purple-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                </div >
            </div >
        </>
    )
}
