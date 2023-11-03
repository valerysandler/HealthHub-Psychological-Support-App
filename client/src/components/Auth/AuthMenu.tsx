import React, { useEffect, useState } from 'react'
import { authStore } from '../../Redux/Store';
import ProfileDropdown from '../ProfileDropdown';
import UserModel from '../../models/UserModel';
import { Link } from 'react-router-dom';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
const AuthMenu = () => {
    const [user, setUser] = useState<UserModel>(null);

    // Get user from global storage
    useEffect(() => {
        authStore.subscribe(() => {
            setUser(authStore.getState().authState.user);
        });
    }
        , []);

    return (
        <>
            {user ? (
                <div className="flex items-center justify-center">
                    <ProfileDropdown />
                </div>
            ) : (
                <div className="flex justify-center items-center py-6" onClick={() => console.log("Login")}
                >
                    <AccountCircleOutlinedIcon className="mr-2 text-purple-900"  />
                      <Link
                        to="/login"
                        className=" mr-2 block rounded-lg px-2 py-1  font-semibold leading-7 text-purple-900  hover:bg-purple-100 focus:ring-4 focus:ring-gray-100 dark:text-purple-900 dark:purpe-gray-700 dark:hover:bg-purple-200"
                    >
                        Log in
                    </Link>
                    <Link
                        to="/register"
                        className=" mr-2 block rounded-lg px-2 py-1  font-semibold leading-7 text-purple-900  hover:bg-purple-100 focus:ring-4 focus:ring-gray-100 dark:text-purple-900 dark:purpe-gray-700 dark:hover:bg-purple-200"
                    >
                        Register
                    </Link>
                  
                </div>
            )}
        </>
    )
}

export default AuthMenu