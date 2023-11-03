import { useForm } from "react-hook-form";
import UserModel from "../../models/UserModel";
import notifyService from "../../services/NotifyService";
import authService from "../../Services/AuthService";
import { useNavigate } from "react-router-dom";
import BackButtonNavigation from "../../Components/Buttons/BackButtonNavigation";


export default function RegisterPage() {
    const navigator = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<UserModel>();
    const submit = handleSubmit(async (user: UserModel) => {
        try {
            await authService.register(user);
            notifyService.success("Registration successful!");
            navigator('/');
        }
        catch (err: unknown) {
            notifyService.error(err as string);
        }
    });

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-1 py-1 lg:px-8 bg-white">
                <BackButtonNavigation />
                <div className="sm:mx-auto sm:w-full sm:max-w-sm flex justify-center items-start">
                    <h2 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-purple-900  " >
                        Sign Up
                    </h2>
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-3">
                        <div className='flex items-center justify-between'>
                            {/* Fist name input */}
                            <div className='mr-6'>
                                <label className="text-sm font-medium leading-6 text-purple-900">
                                    First Name
                                </label>
                                <input
                                    id="firstName"
                                    type="text"
                                    autoComplete="first_name"

                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-purple-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                                    {...register("firstName", {
                                        required: true,
                                        pattern: {
                                            value: /\S+/,
                                            message: "Entered value does not match first name format"
                                        }
                                    })}
                                    {...errors.firstName && (
                                        <span className="text-red-600 text-sm mt-1">
                                            {errors.email?.message}
                                        </span>
                                    )
                                    }
                                />
                            </div>
                            {/* Last name input */}
                            <div>
                                <label className="text-sm font-medium leading-6 text-purple-900">
                                    Last Name
                                </label>
                                <input
                                    id="last_name"
                                    type="text"
                                    autoComplete="last_name"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-purple-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                                    {...register("lastName", {
                                        required: true,
                                        pattern: {
                                            value: /\S+/,
                                            message: "Entered value does not match last name format"
                                        }
                                    })}
                                    {...errors.lastName && {

                                        className: "block w-full rounded-md border-0 py-1.5 text-purple-900 shadow-sm ring-1 ring-inset ring-red-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                    }}
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
                                    {...errors.email && (
                                        // Add notify error 
                                        <span className="text-red-600 text-sm mt-1">
                                            {errors.email?.message}
                                        </span>
                                    )}
                                />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label className="block text-sm font-medium leading-6 text-purple-900">
                                    Password
                                </label>
                            </div>
                            <div>
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
                                    }
                                    }
                                />
                            </div>
                        </div>
                        {/* Add toggle if user specialist 
                            <div>
                                <label className="block text-sm font-medium leading-6 text-purple-900">
                                    Are you a specialist?
                                </label>
                                <div className="mt-1">
                                    <select
                                        id="specialist"
                                        autoComplete="specialist"
                                        className="block w-full py-1.5 px-3 border-0 rounded-md shadow-sm focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 focus:ring-offset-purple-100 focus:outline-none focus-visible:ring-purple-500 focus-visible:ring-opacity-75 sm:text-sm sm:leading-6"
                                        {...register("isSpecialist", {
                                            required: true,
                                        })}
                                    >
                                        <option value="true">Yes</option>
                                        <option value="false">No</option>
                                    </select>
                                </div>
                            </div> */}
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
                                onClick={handleSubmit(submit)}
                                className="flex w-full justify-center rounded-md bg-purple-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
                            >
                                Sign up
                            </button>
                        </div>
                    </form>
                </div >
            </div >
        </>
    )
}