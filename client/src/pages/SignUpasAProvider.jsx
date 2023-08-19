import React from 'react'
import { NavLink } from 'react-router-dom'

const SignUpasAProvider = () => {
  return (
    <div>
        <div className="flex flex-col pr-10   items-center px-6 pt-8 mx-auto md:h-100vh pt:mt-0 dark:bg-gray-900 pt-10">
        <h1 className="text-2xl text-white font-bold mb-6">
    <NavLink to={'/'}>
    Singup as an Job Provider
    </NavLink>
    
  </h1>
  <div className="w-full max-w-4xl p-6 space-y-8 sm:p-8 rounded-lg shadow dark:bg-gray-800">
    <div>
      <h2 className="text-2xl text-white font-bold">Create Your Account</h2>
      <NavLink to={'/signupasseeker'} className="text-blue-500 ">Apply as an job seeker</NavLink>
    </div>
    <form action className="my-10 mb-10">
      <div>
        <label htmlFor="name" name="name" className="text-dm block mb-2 text-white font-bold">Your company's Name</label>
        <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your company's Name" required />
      </div>
      <div>
        <label htmlFor="email" name="email" className="text-dm block mb-2 text-white font-bold mt-2">Your Company's Email</label>
        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="name@company.com" required />
      </div>
      <div>
        <label htmlFor="password" name="password" className="text-dm block mb-2 mt-2 text-white font-bold">Password</label>
        <input type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="********" required />
      </div>
      <hr className="mt-4" />
      {/* company's details */}
      <div>
        <label htmlFor className="text-sm font-bold text-white mt-2 mb-2 block">Company's Information:</label>
        <div>
          <label htmlFor className="text-sm text-white font-bold mr-2">Industry sector</label>
          <input type="text" name="Industrysector" id="Industrysector" placeholder="Industrysector.." className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
        </div>
        <div className="mt-4">
          <label htmlFor className="text-sm text-white font-bold mr-2">Company's Overview:</label>
          <input type="text" name="Company's Overview" id="Company's Overview" placeholder="Company's Overview.." className=" mt-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 w-full  focus:border-primary-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
        </div>
        <div className="mt-4">
          <label htmlFor className="text-sm text-white font-bold mr-2">Company's Website:</label>
          <input type="text" name="Company's Website" id="Company's Website" placeholder="Company's Website.." className=" mt-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 w-full  focus:border-primary-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
        </div>
        <hr className="mt-4" />
        {/* Additional company details */}
        <div className="mt-2">
          <label htmlFor className="text-sm text-white font-bold">Additional Company Information</label>
          <div className="mt-2 blocl">
            <label htmlFor="companysize" className="text-sm text-white font-bold">Company Size:</label>
            <input type="text" name id placeholder="No of Employee" className="ml-10 mt-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500  focus:border-primary-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
          </div>
          <div className="mt-2 block">
            <label htmlFor="companysize" className="text-sm text-white font-bold">Company Location:</label>
            <input type="text" name id placeholder=" Employee Location" className="ml-2 mt-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500  focus:border-primary-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
          </div>
          <div className="mt-2 blocl">
            <label htmlFor="companysize" className="text-sm text-white font-bold">Company logo:</label>
            <input type="file" name id className="ml-10 mt-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500  focus:border-primary-500  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
          </div>
        </div>
      </div>
      <hr className="mt-4" />
      {/* contact details */}
      <div className="mt-2">
        <label htmlFor="personal information" className="text-sm font-bold text-white mt-2 block">Personal information:</label>
        <div className="block mt-2">
          <div>
            <label htmlFor className="text-sm text-white font-bold mr-4">Contact Person's name:</label>
            <input type="text" name="contactno" id="contactno" placeholder="Conatct persons name.." className="ml-4 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 inline p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
          </div>
          <div className="mt-2 block">
            <label htmlFor className="text-sm text-white font-bold mr-4">Contact Person's Number:</label>
            <input type="text" name="contactno" id="contactno" placeholder="Conatct number.." className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 inline p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
          </div>
          <div className="mt-2 block">
            <label htmlFor className="text-sm text-white font-bold mr-4">Contact Person's Email:</label>
            <input type="email" name="contactno" id="contactno" placeholder="person@company.com" className="ml-4 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 inline p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
          </div>
        </div>
        {/* create an account */}
        <div>
          <button type="submit" className="bg-blue-500 text-white font-bold rounded-lg p-2.5 mt-4 w-full hover:text-black hover:bg-blue-700">
            Create an account
          </button>
        </div>
        {/* direct login */}
        <div className="mt-4">
          <NavLink to={'/login'} className="text-blue-500 hover:text-blue-700">Already have an account? Login</NavLink>
        </div>
      </div></form>
  </div>
</div>
    </div>
  )
}

export default SignUpasAProvider