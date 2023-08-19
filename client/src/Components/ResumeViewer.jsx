import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGraduationCap, FaBriefcase, FaCode, FaLink, FaTrophy } from 'react-icons/fa';
import html2pdf from 'html2pdf.js';

const ResumeViewer = ({ data }) => {
 

  return (
    <div className="mt-10 container mx-auto p-4 bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400 text-gray-800 shadow-lg rounded-lg">
      <div className="mb-2">
        <h1 className="text-3xl font-bold">{data.fullName}</h1>
      </div>
      <div className="flex mb-2 items-center">
        <FaEnvelope className="mr-2" />
        {data.email}
      </div>
      <div className="flex mb-2 items-center">
        <FaPhone className="mr-2" />
        {data.phone}
      </div>
      <div className="flex mb-4 items-center">
        <FaMapMarkerAlt className="mr-2" />
        {data.address}
      </div>

      <hr className="border border-gray-700 mb-6" />

      <div className="mb-4">
        <h2 className="text-lg font-bold text-gray-900">
          <FaGraduationCap className="mr-2" />
          Education:
        </h2>
        <div className="mb-2 ml-6">
          <p className="text-base">{data.education}</p>
          <p className="text-base">{data.date1}</p>
        </div>
        <div className="mb-2 ml-6">
          <p className="text-base">{data.education2}</p>
          <p className="text-base">{data.date2}</p>
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-bold text-gray-900">
          <FaBriefcase className="mr-2" />
          Work Experience:
        </h2>
        <p className="text-base">{data.workExperience}</p>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-bold text-gray-900">
          <FaCode className="mr-2" />
          Skills:
        </h2>
        <p className="text-base">{data.skills}</p>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-bold text-gray-900">
          <FaCode className="mr-2" />
          Projects:
        </h2>
        <p className="text-base">{data.projects}</p>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-bold text-gray-900">
          <FaLink className="mr-2" />
          Portfolio Links:
        </h2>
        <p className="text-base">{data.portfolioLinks}</p>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-bold text-gray-900">
          <FaTrophy className="mr-2" />
          Achievements:
        </h2>
        <p className="text-base">{data.achievements}</p>
      </div>

   

  
    </div>
  );
};

export default ResumeViewer;
