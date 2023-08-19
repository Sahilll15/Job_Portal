import React from 'react'

const Companies = () => {
  return (
    <div>
  <div className="container mx-auto p-8">
    <h1 className="text-3xl font-bold mb-4">Companies on Job Portal</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-white rounded-lg shadow p-4">
        <img src="https://via.placeholder.com/150" alt="Company A" className="w-full h-32 object-cover mb-4 rounded-lg" />
        <h2 className="text-xl font-bold mb-2">Company A</h2>
        <p className="text-gray-600 mb-2">Industry: IT | Sector: Private</p>
        <p className="text-gray-600 mb-4">
          Description: Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.
        </p>
        <a href="#" className="text-blue-500 block">View Jobs</a>
      </div>
      <div className="bg-white rounded-lg shadow p-4">
        <img src="https://via.placeholder.com/150" alt="Company B" className="w-full h-32 object-cover mb-4 rounded-lg" />
        <h2 className="text-xl font-bold mb-2">Company B</h2>
        <p className="text-gray-600 mb-2">Industry: Finance | Sector: Public</p>
        <p className="text-gray-600 mb-4">
          Description: Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <a href="#" className="text-blue-500 block">View Jobs</a>
      </div>
      <div className="bg-white rounded-lg shadow p-4">
        <img src="https://via.placeholder.com/150" alt="Company C" className="w-full h-32 object-cover mb-4 rounded-lg" />
        <h2 className="text-xl font-bold mb-2">Company C</h2>
        <p className="text-gray-600 mb-2">
          Industry: Marketing | Sector: Private
        </p>
        <p className="text-gray-600 mb-4">
          Description: Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <a href="#" className="text-blue-500 block">View Jobs</a>
      </div>
      <div className="bg-white rounded-lg shadow p-4">
        <img src="https://via.placeholder.com/150" alt="Company D" className="w-full h-32 object-cover mb-4 rounded-lg" />
        <h2 className="text-xl font-bold mb-2">Company D</h2>
        <p className="text-gray-600 mb-2">
          Industry: Healthcare | Sector: Public
        </p>
        <p className="text-gray-600 mb-4">
          Description: Quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <a href="#" className="text-blue-500 block">View Jobs</a>
      </div>
      <div className="bg-white rounded-lg shadow p-4">
        <img src="https://via.placeholder.com/150" alt="Company E" className="w-full h-32 object-cover mb-4 rounded-lg" />
        <h2 className="text-xl font-bold mb-2">Company E</h2>
        <p className="text-gray-600 mb-2">
          Industry: Education | Sector: Private
        </p>
        <p className="text-gray-600 mb-4">
          Description: Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <a href="#" className="text-blue-500 block">View Jobs</a>
      </div>
    </div>
  </div>
</div>

  )
}

export default Companies