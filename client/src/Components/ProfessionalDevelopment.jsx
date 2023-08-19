import React from 'react';

const ProfessionalDevelopment = () => {
    const developmentResourcesData = [
        {
          title: "Effective Time Management Techniques",
          link: "https://example.com/time-management-tips",
          description: "Learn how to manage your time efficiently and boost productivity.",
        },
        {
          title: "Mastering Communication Skills",
          link: "https://example.com/communication-skills",
          description: "Enhance your communication skills for better professional relationships.",
        },
      ];
      
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6">Professional Development Tips</h2>
        {developmentResourcesData.map((resource, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg font-semibold">
              <a href={resource.link} className="text-blue-500 hover:underline">
                {resource.title}
              </a>
            </h3>
            <p>{resource.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProfessionalDevelopment;
