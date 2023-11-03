import { useForm } from "react-hook-form";
import BackButtonNavigation from '../../Components/Buttons/BackButtonNavigation';
import authService from '../../Services/AuthService';
import notifyService from '../../services/NotifyService';
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
    const { handleSubmit, register, formState: { errors } } = useForm();
    const navigator = useNavigate();

    const submit = async (email: string) => {
        try {
            console.log("Send link cliecked");
            const response = await authService.forgotPassword(email);
            notifyService.success(response);
            navigator("/login");
        }
        catch (err: unknown) {
            notifyService.error(err as string);
        }
    }
    return (
        <>
            <BackButtonNavigation />
            <div className="flex min-h-full flex-1 flex-col justify-center items px-6 py-20 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm pt-7">
                    <h2 className="mt-5 text-center text-4xl font-bold leading-9 tracking-tight text-purple-900" >
                        Forgot Password
                    </h2>
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" >
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
                                        className: "block w-full rounded-md border-0 py-1.5 text-purple-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6 border-red-500"
                                    }
                                    }
                                />
                            </div>

                        </div>
                        <div>
                            <button
                                type="submit"
                                onClick={handleSubmit(submit)}
                                className="flex w-full justify-center rounded-md bg-purple-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
                            >
                                Send Password Reset Link
                            </button>
                        </div>
                    </form>

                    {/* Add google social auth icon and */}
                </div >
            </div >
        </>
    )
}

export default ForgotPassword