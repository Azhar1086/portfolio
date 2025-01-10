import React from 'react';
import Card from './Card';

import chess from "../images/bulkbytes.jpg";
import snake from "../images/admin.jpg";
import wise_way from "../images/image.jpg";

const Projects = () => {
  const cards = [
    {
      imageUrl: chess, // Add the appropriate image URL for the official website
      altText: 'Bulk Byte Official Website',
      title: 'Bulk Byte Official Website',
      description: 'The official website of Bulk Byte, a platform offering services related to software development, digital marketing, and IT solutions. Explore our portfolio, blog, and contact information for collaboration.',
      explore: 'https://bulkbyteofficial.netlify.app' // Replace with your actual website link
    },
    {
      imageUrl: snake, // Add the appropriate image URL for the admin panel project
      altText: 'Admin Panel of Contest App',
      title: 'Admin Panel of Contest App',
      description: 'A comprehensive admin panel for a contest app, where administrators can manage participants, review submissions, and oversee the entire contest process, ensuring smooth and efficient operations.',
      explore: 'https://thunderous-rabanadas-a5b274.netlify.app/' // Add the link to your GitHub repo for the admin panel project
    },
    {
      imageUrl: wise_way, // Add the appropriate image URL for your third project
      altText: 'Personal Portfolio',
      title: 'Personal Portfolio',
      description: 'This is my personal portfolio website where you can explore my skills, projects, and contact information. It showcases my work and expertise in web development, providing a clear overview of my capabilities.',
      explore: 'https://github.com/your-github-repo' // Replace with your portfolio GitHub link
    }
   
  ];
  

  return (
    <div className="up_gap" id="project">
      <h2 className='heading1 down_gap'>Projects</h2>
      <div className="completely">
        <div className="grid">
          {cards.map((card, index) => (
            <Card
              key={index}
              imageUrl={card.imageUrl}
              altText={card.altText}
              title={card.title}
              description={card.description}
              explore={card.explore}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
