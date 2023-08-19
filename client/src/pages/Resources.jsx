import React from 'react'

const Resources = () => {
  return (
   <div>
  <div className="container mx-auto px-4 py-8">
    {/* Job Seeker Resources Section */}
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Job Seeker Resources</h2>
      <ul className="list-disc list-inside">
        <li className="text-blue-500"><a href="#">Interview Tips</a></li>
        <li className="text-blue-500"><a href="#">Resume Writing Guides</a></li>
        <li className="text-blue-500">
          <a href="#">Career Development Articles</a>
        </li>
        <li className="text-blue-500"><a href="#">How to Ace a Job Fair</a></li>
        <li className="text-blue-500">
          <a href="#">Networking Strategies for Job Seekers</a>
        </li>
      </ul>
      <h3 className="text-lg font-bold mt-6">Interview Tips</h3>
      <p className="mt-2">
        Preparing for an interview? Check out these essential interview tips
        to help you impress your potential employers:
      </p>
      <ul className="list-disc list-inside mt-2">
        <li>Research the company thoroughly before the interview.</li>
        <li>
          Practice common interview questions and prepare your responses.
        </li>
        <li>Dress professionally and arrive on time.</li>
        <li>
          Bring extra copies of your resume and a notepad for taking notes.
        </li>
        <li>Follow up with a thank-you email after the interview.</li>
      </ul>
      <h3 className="text-lg font-bold mt-6">Resume Writing Guides</h3>
      <p className="mt-2">
        Crafting an effective resume is crucial for your job search. Here are
        some resume writing guides to help you create a standout resume:
      </p>
      <ul className="list-disc list-inside mt-2">
        <li>
          Choose a professional resume format that highlights your skills and
          experience.
        </li>
        <li>Showcase your accomplishments and quantifiable achievements.</li>
        <li>Use keywords and tailor your resume for each job application.</li>
        <li>
          Include a strong summary statement and relevant work experience.
        </li>
        <li>Proofread your resume thoroughly for errors.</li>
      </ul>
      <h3 className="text-lg font-bold mt-6">Career Development Articles</h3>
      <p className="mt-2">
        Stay ahead in your career with these insightful career development
        articles:
      </p>
      <ul className="list-disc list-inside mt-2">
        <li>How to Set Achievable Career Goals</li>
        <li>Tips for Building a Professional Network</li>
        <li>Top Skills Employers Are Looking For</li>
        <li>Strategies for Career Advancement</li>
        <li>Importance of Continuous Learning</li>
      </ul>
    </div>
  </div>
</div>

  )
}

export default Resources