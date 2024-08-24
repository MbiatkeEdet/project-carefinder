import Link from 'next/link'
import Image from 'next/image'
import { FC } from 'react';
import { login } from './actions'

const Page: FC = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-300">
      <div className=" relative grid grid-cols-2 w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-blue-300 mb-6 text-center">Welcome,</h2>
        <form formAction={login} className="space-y-8">
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
            <div className="text-sm mt-2">
                    <a href="#" className="font-semibold text-indigo-300 hover:text-indigo-200">
                      Forgot password?
                    </a>
                  </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-slate-700 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            formAction={login}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
