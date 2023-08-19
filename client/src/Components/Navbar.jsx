import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

  const handleLogout=()=>{
    localStorage.removeItem("token")
    window.location.reload()
  }
  return (
    <nav className="bg-black p-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <NavLink to={"/"}>
          <div className="text-white font-bold text-xl hover:text-blue-500">
            NueveraJOBS
          </div>
          </NavLink>
          <ul className="flex space-x-4">
            <li>
              <NavLink
                to="/"
                className="text-white hover:text-gray-300"
                activeClassName="text-blue-500"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className="text-white hover:text-gray-300"
                activeClassName="text-blue-500"
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/companies"
                className="text-white hover:text-gray-300"
                activeClassName="text-blue-500"
              >
                Companies
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className="text-white hover:text-gray-300"
                activeClassName="text-blue-500"
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resources"
                className="text-white hover:text-gray-300"
                activeClassName="text-blue-500"
              >
                Resources
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/help"
                className="text-white hover:text-gray-300"
                activeClassName="text-blue-500"
              >
                Help
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                className="text-white hover:text-gray-300"
                activeClassName="text-blue-500"
              >
                Dashboard
              </NavLink>
              
            </li>
            <li>
              <NavLink
                to="/interviewprep"
                className="text-white hover:text-gray-300"
                activeClassName="text-blue-500"
              >
                Interviewprep
              </NavLink>
              
            </li>
            <li>
              <NavLink
                to="/resume"
                className="text-white hover:text-gray-300"
                activeClassName="text-blue-500"
              >
                Resume
              </NavLink>
              </li>
              <li>
              <button
               onClick={handleLogout}
                className="text-white hover:text-gray-300 border border-rose-200 px-2 bg-red-600 rounded-lg"
                activeClassName="text-blue-500"
              >
                Logout
              </button>
              </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
