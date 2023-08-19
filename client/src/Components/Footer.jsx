import React from 'react'

const Footer = () => {
  return (
    <div>
       <footer className="mt-12 p-4 bg-blue-500 text-white">
  <div className="container mx-auto">
    <div className="flex justify-between">
      <div className="mr-8">
        <h2 className="text-xl font-bold">Contact Us</h2>
        <p className="text-gray-200">Email: info@NueveraJOBS.com</p>
        <p className="text-gray-200">Phone: +1 (123) 456-7890</p>
        <p className="text-gray-200">
          Address: 123 Job Portal Street, City, Country
        </p>
      </div>
      <div>
        <h2 className="text-xl font-bold">Follow Us</h2>
        <div className="flex mt-2">
          <a href="#" className="text-gray-200 hover:text-white mr-4">Facebook</a>
          <a href="#" className="text-gray-200 hover:text-white mr-4">Twitter</a>
          <a href="#" className="text-gray-200 hover:text-white">LinkedIn</a>
        </div>
      </div>
    </div>
  </div>
  <div className="mt-4 border-t border-blue-600 py-4">
    <p className="text-center text-sm text-gray-300">
      © 2023 NueveraJOBS. All rights reserved.
    </p>
  </div>
</footer>

    </div>
  )
}

export default Footer