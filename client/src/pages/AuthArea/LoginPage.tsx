import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import CredentialsModel from '../../Models/CredentialsModel';
import authService from '../../Services/AuthService';
import notifyService from '../../Services/NotifyService';
import Button from '../../Components/Buttons/Button';
import BackButtonNavigation from '../../Components/Buttons/BackButtonNavigation';

export default function LoginPage() {
    const navigator = useNavigate();
    const { handleSubmit, register, formState: { errors } } = useForm<CredentialsModel>();

    const submit = (async (credentials: CredentialsModel) => {
        try {
            console.log("Credentials: ", credentials);
            const response = await authService.login(credentials);
            console.log("Response: ", response);
            if (response === 401) {
                notifyService.error("Invalid credentials");
                return;
            } else if (response === 404) {
                notifyService.error("User not found");
                return;
            } else {
                notifyService.success("Logged in successfully");
                navigator("/doctors");
            }
        }
        catch (err: unknown) {
            console.log(err);
            notifyService.error(err as string);
        }
    });



    return (
        <>
            <BackButtonNavigation />

            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-5 text-center text-4xl font-bold leading-9 tracking-tight text-purple-900" >
                    Sign in to your account
                </h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-purple-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                onChange={(e) => { console.log(e.target.value) }}
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
                                <Link to="/forgotPassword" className="font-semibold text-purple-600 hover:text-purple-500">
                                    Forgot password?
                                </Link>
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
                <div className="mt-6">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-500">Or continue with</span>
                        </div>
                    </div>

                    <div className="mt-6 grid grid-cols-3 gap-3">
                        <div>
                            <Button text="Google" onClick={() => { console.log("Google clicked") }} />
                        </div>

                        <div>
                            <Button text="Facebook" onClick={() => { console.log("Facebook clicked") }} />
                        </div>

                        <div>
                            <Button text="Github" onClick={() => { console.log("Github clicked") }} />
                        </div>
                    </div>
                </div>
                <p className="mt-10 text-center text-sm text-gray-500">
                    Not registered yet?{' '}
                    <Link
                        to={"/register"}
                        onClick={
                            () => {
                                console.log("Register clicked");
                                //    Open the modal
                            }
                        } className="font-semibold leading-6 text-purple-600 hover:text-purple-500">
                        Register here &rarr;
                    </Link>
                </p>
                {/* Add google social auth icon and */}
            </div>
        </>
    )
}