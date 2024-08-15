import Link from 'next/link'
import Image from 'next/image'
import { FC } from 'react';
import { signup } from '../Login/actions'

const Page: FC = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-300">
      <div className="grid grid-col w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-5xl font-semibold text-black-300 mb-6 text-center">Create an account</h2>
        <p className="text-black-300 font-light text-3xl mb-7 text-center">Kickstart your healthy lifestyle journey!</p>
        <form className="space-y-8">
          <div>
            <label htmlFor="name" classname="block text-sm font-medium text-gray-700">Surname</label>
            <input 
            type="surname"
            id="surname"
            name="surname"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              type="firstname"
              id="firstname"
              name="firstname"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-slate-700 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            formAction={signup}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
