import React from 'react'
import { NavLink } from 'react-router-dom'

const SignUp = () => {
  return (
    <div>
        <div className="flex flex-col items-center px-6 pt-8 mx-auto md:h-100vh pt:mt-0 dark:bg-gray-900 pt-10">
          
  <h1 className="text-2xl text-white font-bold mb-6">
    
    Singup as an Job seeker
    
    
  </h1>
  <div className="w-full max-w-4xl p-6 space-y-8 sm:p-8 rounded-lg shadow dark:bg-gray-800">
    <div>
      <h2 className="text-2xl text-white font-bold">Create Your Account</h2>
      <NavLink to={'/signupasaprovider'} className="text-blue-500 ">Apply as an job Provider</NavLink>
    </div>
    <form action>
      <div>
        <label htmlFor="name" name="name" className="text-dm block mb-2 text-white font-bold">Your Full Name</label>
        <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Full Name" required />
      </div>
      <div>
        <label htmlFor="email" name="email" className="text-dm block mb-2 text-white font-bold mt-2">Your Email</label>
        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="name@google.com" required />
      </div>
      <div>
        <label htmlFor="password" name="password" className="text-dm block mb-2 mt-2 text-white font-bold">Password</label>
        <input type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="********" required />
      </div>
      <hr className="mt-4" />
      {/* contact information */}
      <div>
        <label htmlFor className="text-sm font-bold text-white mt-2 mb-2 block">Contact Information</label>
        <input type="text" name="contactno" id="contactno" placeholder="contact no" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
      </div>
      <hr className="mt-4" />
      <div>
        <label htmlFor="personal information" className="text-sm font-bold text-white mt-2 block">Personal information:</label>
        <div className="block mt-2">
          <div>
            <label htmlFor className="text-sm text-white font-bold mr-4">Date of birth</label>
            <input type="date" name="contactno" id="contactno" placeholder="DOB" className="mr-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 inline p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
          </div>
          <div className="mt-2">
            <label htmlFor="language" className="text-sm text-white font-bold">Mother Tongue</label>
            <input type="text" name="Mother Tongue" id="Mother Tongue" placeholder="Mother Tongue" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 inline p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
          </div>
        </div>
        <hr className="mt-4" />
        {/* educational bg */}
        <div>
          <div>
            <label htmlFor="Educationalbg" className="text-sm text-white block mt-4 font-bold">Educational Background:</label>
            <div className="mt-4">
              <input type="text" name="contactno" id="contactno" placeholder="Qualification.." className="mr-6 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 inline p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
              <input type="text" name="University" id="University" placeholder="University.." className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
            </div>
          </div>
        </div>
        {/* work experince */}
        <hr className="mt-4" />
        <div>
          <label htmlFor="work" className="text-sm font-bold text-white mt-2 block">Work experince:</label>
          <select name id className="text-sm rounded-lg p-2 block mt-2 bg-white">
            <option value="Fresher">Fresher</option>
            <option value="experince">Experience</option>
          </select>
        </div>
        <hr className="mt-4" />
        {/* job role */}
        <div>
          <label htmlFor className="text-sm mt-2 font-bold text-white block">Job Role:</label>
        </div>
        <div className="block mt-2">
          <label htmlFor className="text-sm mt-2 font-bold text-white inline">Job Title</label>
          <input type="text" placeholder="Web Dev/AI dev.." className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
        </div>
        <div className="mt-4">
          <label htmlFor className="text-sm mt-2 font-bold text-white inline">Job Location:</label>
          <select name id className="text-sm rounded-lg p-2 inline mt-2 bg-whit ml-2">
            <option value>Work From Home</option>
            <option value>InOffice</option>
          </select>
        </div>
        {/* upload resume */}
        <hr className="mt-4" />
        <div className="mt-4">
          <label htmlFor className="text-sm text-white inline font-bold">Upload resume</label>
          <input type="file" name id className="ml-2 p-2 bg-gray-800 rounded-lg border border-gray-300 text-white" />
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

export default SignUp