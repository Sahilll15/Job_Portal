import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../Context/authContext'


const SignUp = () => {

  const { register } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    contactNo: '',
    dateOfBirth: '',
    motherTongue: '',
    qualification: '',
    university: '',
    experience: '',
    jobTitle: '',
    jobLocation: '',
    resume: null,
  });

 const handleSubmit=async(e)=>{
    e.preventDefault();
    await register(formData);
    console.log(formData);
 };

  const handleChange = (e) => {
   
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
  };

  
  
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
    <form onSubmit={handleSubmit} >
      <div>
        <label htmlFor="name" name="name" className="text-dm block mb-2 text-white font-bold">Your Full Name</label>
        <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Full Name" required onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="email" name="email" className="text-dm block mb-2 text-white font-bold mt-2">Your Email</label>
        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="name@google.com" required  onChange={handleChange}  />
      </div>
      <div>
        <label htmlFor="password" name="password" className="text-dm block mb-2 mt-2 text-white font-bold">Password</label>
        <input type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="********" required onChange={handleChange}  />
      </div>
      <hr className="mt-4" />
      {/* contact information */}
      <div>
        <label htmlFor className="text-sm font-bold text-white mt-2 mb-2 block">Contact Information</label>
        <input type="text" name="contactNo" id="contactNo" placeholder="contact no" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" onChange={handleChange}  />
      </div>
      <hr className="mt-4" />
      <div>
        <label htmlFor="personal information" className="text-sm font-bold text-white mt-2 block">Personal information:</label>
        <div className="block mt-2">
          <div>
            <label htmlFor className="text-sm text-white font-bold mr-4">Date of birth</label>
            <input type="date" name="dateOfBirth" id="contactNo" placeholder="dateOfBirth" className="mr-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 inline p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" onChange={handleChange}  />
          </div>
          <div className="mt-2">
            <label htmlFor="language" className="text-sm text-white font-bold">Mother Tongue</label>
            <input type="text" name="motherTongue" id="Mother Tongue" placeholder="Mother Tongue" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 inline p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" onChange={handleChange}  />
          </div>
        </div>
        <hr className="mt-4" />
        {/* educational bg */}
        <div>
          <div>
            <label htmlFor="Educationalbg" className="text-sm text-white block mt-4 font-bold">Educational Background:</label>
            <div className="mt-4">
              <input type="text" name="qualification" id="contactNo" placeholder="qualification.." className="mr-6 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 inline p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" onChange={handleChange}  />
              <input type="text" name="university" id="university" placeholder="university.." className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" onChange={handleChange}  />
            </div>
          </div>
        </div>
        {/* work experience */}
        <hr className="mt-4" />
        <div>
          <label htmlFor="work" className="text-sm font-bold text-white mt-2 block">Work experience:</label>
          <select name="experience" className="text-sm rounded-lg p-2 block mt-2 bg-white" onChange={handleChange}>
            <option value="Fresher">Fresher</option>
            <option value="Experience">Experience</option>
          </select>
        </div>
        <hr className="mt-4" />
        {/* job role */}
        <div>
          <label htmlFor className="text-sm mt-2 font-bold text-white block">Job Role:</label>
        </div>
        <div className="block mt-2">
          <label htmlFor className="text-sm mt-2 font-bold text-white inline">Job Title</label>
          <input type="text " name="jobTitle" placeholder="Web Dev/AI dev.." className="mx-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" onChange={handleChange} />
        </div>
        <div className="mt-4">
          <label htmlFor className="text-sm mt-2 font-bold text-white inline">Job Location:</label>
          <select name="jobLocation"  className="text-sm rounded-lg p-2 inline mt-2 bg-whit ml-2" onChange={handleChange}>
            <option value="workFromHome">Work From Home</option>
            <option value="InOffice">InOffice</option>
          </select>
        </div>
        {/* upload resume */}
        <hr className="mt-4" />
        <div className="mt-4">
          <label htmlFor className="text-sm text-white inline font-bold">Upload resume</label>
          <input type="file" name="resume"  className="ml-2 p-2 bg-gray-800 rounded-lg border border-gray-300 text-white" onChange={handleFileChange}/>
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