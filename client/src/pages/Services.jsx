import React from 'react'

const Services = () => {
  return (
    <div className='h-screen'>
        <div className="container mx-auto p-8">
  <h1 className="text-3xl font-bold mb-4">Job Portal Services</h1>
  <div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-2xl font-bold mb-4">Services We Offer</h2>
    <p className="text-gray-600 mb-4">
      At our job portal, we provide a range of services to help job seekers
      and employers connect, explore opportunities, and build successful
      careers. Here are some of the key services we offer:
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="bg-blue-500 rounded-lg p-4 text-white">
        <h3 className="text-lg font-bold mb-2">Job Listings</h3>
        <p>
          Browse through a wide range of job listings from various
          industries and sectors. Find your dream job and apply with ease.
        </p>
      </div>
      <div className="bg-blue-500 rounded-lg p-4 text-white">
        <h3 className="text-lg font-bold mb-2">Resume Builder</h3>
        <p>
          Create a professional and eye-catching resume with our easy-to-use
          resume builder tool. Stand out to employers.
        </p>
      </div>
      <div className="bg-blue-500 rounded-lg p-4 text-white">
        <h3 className="text-lg font-bold mb-2">Company Profiles</h3>
        <p>
          Explore detailed profiles of companies to get insights into their
          culture, values, and work environment.
        </p>
      </div>
      <div className="bg-blue-500 rounded-lg p-4 text-white">
        <h3 className="text-lg font-bold mb-2">Job Alerts</h3>
        <p>
          Set up personalized job alerts based on your preferences. Get
          notified when new job opportunities match your criteria.
        </p>
      </div>
      <div className="bg-blue-500 rounded-lg p-4 text-white">
        <h3 className="text-lg font-bold mb-2">Career Resources</h3>
        <p>
          Access a rich library of career resources, tips, and advice to
          enhance your skills and excel in interviews.
        </p>
      </div>
      <div className="bg-blue-500 rounded-lg p-4 text-white">
        <h3 className="text-lg font-bold mb-2">Employer Solutions</h3>
        <p>
          Employers can post job openings, manage applications, and discover
          qualified candidates through our platform.
        </p>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Services