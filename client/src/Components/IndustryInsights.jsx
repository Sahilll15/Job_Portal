import React from 'react';



const IndustryInsights = () => {
    const industryInsightsData = [
        {
          title: "Emerging Trends in Technology",
          author: "Alex Johnson",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        },
        {
          title: "Sustainable Practices in Green Energy",
          author: "Emily Davis",
          content: "Vestibulum non nulla ut libero tincidunt consectetur...",
        },
      ];
  return (
    <section className="bg-white py-10">
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-6">Industry Insights</h2>
      {industryInsightsData.map((article, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-lg font-semibold">{article.title}</h3>
          <p className="text-gray-600">{article.author}</p>
          <p>{article.content}</p>
        </div>
      ))}
    </div>
  </section>

  );
};

export default IndustryInsights;

