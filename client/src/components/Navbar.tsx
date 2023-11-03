import { Fragment, useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import { Dialog, Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { Link, useNavigate } from 'react-router-dom'
import { authStore } from '../Redux/Store'
import notifyService from '../Services/NotifyService'
import ProfileDropdown from './ProfileDropdown'
import AuthMenu from '../Components/Auth/AuthMenu'



export default function Navbar() {
  const navigator = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // Check state if user logged in unvisible login button
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    authStore.subscribe(() => {
      setLoggedIn(authStore.getState().authState.user !== null);
    });

    authStore.dispatch({ type: 'CHECK_LOGIN' });
  }, []);

  useEffect(() => {
    if (loggedIn) {
      notifyService.success("Welcome back!");
    }
  }, [loggedIn]);
  return (
    <header className="bg-white">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div className="flex lg:flex-1">
        <Link to="/" className="-m-1.5 p-1.5">
          <img className="h-10 w-auto mb-2 flex justify-center items-center" src={logo}alt="" /> 
        </Link>
      </div>
      <div className="flex lg:hidden">
        <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
          <span className="sr-only">Open main menu</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        <Link to="/doctors" className="mr-5 block rounded-lg px-2 py-1  font-semibold leading-7 text-purple-900 hover:text-black hover:bg-purple-400 focus:ring-4 focus:ring-gray-100 dark:text-purple-900 dark:purpe-gray-700 dark:hover:bg-purple-200">Doctors</Link>
        <a href="#" className="mr-5 block rounded-lg px-2 py-1  font-semibold leading-7 text-purple-400  hover:bg-purple-100 focus:ring-4 focus:ring-gray-100 dark:text-purple-900 dark:purpe-gray-700 dark:hover:bg-purple-200">Features</a>
        <a href="#" className="mr-5 block rounded-lg px-2 py-1  font-semibold leading-7 text-purple-400  hover:bg-purple-100 focus:ring-4 focus:ring-gray-100 dark:text-purple-900 dark:purpe-gray-700 dark:hover:bg-purple-200">Marketplace</a>
        <Link to="/about" className="mr-5 block rounded-lg px-2 py-1  font-semibold leading-7 text-purple-400  hover:bg-purple-100 focus:ring-4 focus:ring-gray-100 dark:text-purple-900 dark:purpe-gray-700 dark:hover:bg-purple-200">Company</Link>
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <AuthMenu />
      </div>
    </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-purple-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">HealthHub</span>
              <img
                className="h-8 w-auto"
                src={logo}
                alt="logo"
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-3 py-6" >

                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Marketplace
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Company
                </a>
              </div>
              <AuthMenu />
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header >
  )
}