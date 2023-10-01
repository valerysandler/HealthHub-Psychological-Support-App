import { Link } from 'react-router-dom';
import header_image from '../assets/header_image.png';
import { useForm } from 'react-hook-form';
import CredentialsModel from '../models/CredentialsModel';
import authService from '../services/AuthService';

export default function LoginPage() {
    const { register, handleSubmit, formState: { errors } } = useForm<CredentialsModel>();

    const submit = handleSubmit(async (credentials: CredentialsModel) => {
        try {
            console.log(credentials);
            await authService.login(credentials);
            window.location.href = "/";

        }
        catch (err) {
            console.log(err);
        }

    });
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-20 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-purple-900" >
                        Sign in to your account
                    </h2>
                    <img
                        className="mx-auto h-74 w-auto"
                        src={header_image}
                        alt="HealthHub Header"
                    />
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-purple-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-purple-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                                    {...register("email", {
                                        required: true,
                                        pattern: {
                                            value: /\S+@\S+\.\S+/,
                                            message: "Entered value does not match email format"
                                        }
                                    })}
                                    {...errors.email && {
                                        className: "block w-full rounded-md border-0 py-1.5 text-purple-900 shadow-sm ring-1 ring-inset ring-red-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                    }}
                                />
                            </div>

                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-purple-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-purple-600 hover:text-purple-500">
                                        Forgot password?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-purple-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                                    {...register("password", {
                                        required: true,
                                        minLength: {
                                            value: 8,
                                            message: "Password must be at least 8 characters long"
                                        }
                                    })}
                                    {...errors.password && {
                                        className: "block w-full rounded-md border-0 py-1.5 text-purple-900 shadow-sm ring-1 ring-inset ring-red-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                    }}
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                onClick={handleSubmit(submit)}
                                className="flex w-full justify-center rounded-md bg-purple-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
                            >
                                Login
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not registered yet?{' '}
                        <Link to="/register" className="font-semibold leading-6 text-purple-600 hover:text-purple-500">
                            Register here &rarr;
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}
