import React from 'react';

const CareerAdvice = () => {
    const articleData = [
        {
          title: "Top 10 Tips for Career Growth",
          author: "Jane Smith",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        },
        {
          title: "Navigating Job Changes Successfully",
          author: "John Doe",
          content: "Vestibulum non nulla ut libero tincidunt consectetur...",
        },
      ];
      
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6">Expert Career Advice</h2>
        {articleData.map((article, index) => (
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

export default CareerAdvice;
