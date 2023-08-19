import React from 'react'

const DashBoard = () => {
  return (
    <div className='h-screen'>
         <div className="container mx-auto px-4 py-8">
  <div className="bg-white p-4 rounded-lg shadow-lg">
    <h2 className="text-xl font-bold mb-4 text-black">Job Data Table</h2>
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th className="px-4 py-2">Job Title</th>
          <th className="px-4 py-2">Company</th>
          <th className="px-4 py-2">Location</th>
          <th className="px-4 py-2">Status</th>
          <th className="px-4 py-2">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr className="text-black">
          <td className="border px-4 py-2">Frontend Developer</td>
          <td className="border px-4 py-2">ABC Tech Solutions</td>
          <td className="border px-4 py-2">New York</td>
          <td className="border px-4 py-2">Applied</td>
          <td className="border px-4 py-2">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              Edit
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
              Delete
            </button>
          </td>
        </tr>
        <tr className="text-black">
          <td className="border px-4 py-2">Software Engineer</td>
          <td className="border px-4 py-2">XYZ Solutions</td>
          <td className="border px-4 py-2">San Francisco</td>
          <td className="border px-4 py-2">In Progress</td>
          <td className="border px-4 py-2">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              Edit
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
              Delete
            </button>
          </td>
        </tr>
        <tr className="text-black">
          <td className="border px-4 py-2">Data Analyst</td>
          <td className="border px-4 py-2">DataCorp</td>
          <td className="border px-4 py-2">London</td>
          <td className="border px-4 py-2">New</td>
          <td className="border px-4 py-2">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              Edit
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
              Delete
            </button>
          </td>
        </tr>
        <tr className="text-black">
          <td className="border px-4 py-2">visar Analyst</td>
          <td className="border px-4 py-2">Manforce</td>
          <td className="border px-4 py-2">london</td>
          <td className="border px-4 py-2">Applied</td>
          <td className="border px-4 py-2">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              Edit
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

    </div>
  )
}

export default DashBoard