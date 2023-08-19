import React from 'react'

const Help = () => {
  return (
    <div>
         <div className="container mx-auto p-8">
  <h1 className="text-3xl font-bold mb-4">Job Portal Help</h1>
  <div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-xl font-bold mb-4">Welcome to the Job Portal</h2>
    <p className="text-gray-600 mb-4">
      Our job portal allows you to browse and apply for various job listings
      from different companies. Here's a quick guide to get started:
    </p>
    <ol className="list-decimal ml-6">
      <li className="mb-2">
        Explore Job Listings: On the main page, you'll find a list of
        available job listings. Each job listing card contains essential
        details like job title, company, industry, and required skills.
      </li>
      <li className="mb-2">
        View Details: Click on the "View Details" link in a job listing card
        to see more information about the job, such as the job description,
        qualifications, and application instructions.
      </li>
      <li className="mb-2">
        Apply for a Job: If you find a job that interests you, follow the
        provided application instructions to apply for the position.
      </li>
      <li className="mb-2">
        Search and Filter: Use the search and filter options to narrow down
        the job listings based on your preferences, such as job title,
        industry, or location.
      </li>
    </ol>
  </div>
  <h2 className="text-2xl font-bold my-6">Example Job Listings</h2>
  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="text-lg font-bold mb-2">Software Engineer</h3>
      <p className="text-gray-600 mb-1">Company X</p>
      <p className="text-gray-600 mb-1">Industry: IT | Sector: Private</p>
      <p className="text-gray-600 mb-4">Skills: Programming, Web Development</p>
      <a href="#" className="text-blue-500 block">View Details</a>
    </div>
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="text-lg font-bold mb-2">Financial Analyst</h3>
      <p className="text-gray-600 mb-1">Company Y</p>
      <p className="text-gray-600 mb-1">Industry: Finance | Sector: Public</p>
      <p className="text-gray-600 mb-4">Skills: Finance, Accounting</p>
      <a href="#" className="text-blue-500 block">View Details</a>
    </div>
  </div>
  <div className="mt-8">x
    <h2 className="text-2xl font-bold mb-4">Have Questions? Submit a Query</h2>
    <form className="bg-white rounded-lg shadow p-6">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
        <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:border-blue-500" required />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
        <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:border-blue-500" required />
      </div>
      <div className="mb-4">
        <label htmlFor="query" className="block text-gray-700 font-bold mb-2">Query</label>
        <textarea id="query" name="query" rows={4} className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:border-blue-500" required defaultValue={""} />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-500">
        Submit Query
      </button>
    </form>
  </div>
</div>

    </div>
  )
}

export default Help