import React from 'react';
import { useParams } from 'react-router-dom';

// Define types for the job data structure
interface Job {
  title: string;
  description: string;
  budget: string;
  duration: string;
  proposals: string;
  posted: string;
  skills: string;
  tags: string[];
}

const JobDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the job ID from the URL (id is a string)

  // Dummy job data for demonstration
  const jobData: { [key: string]: Job } = {
    '1': {
      title: "Smart Contract Developer Needed",
      description: "Looking for an experienced smart contract developer to build and audit our DeFi protocol. Must have experience with Solidity and Web3.js.",
      budget: "$80-120/hr",
      duration: "2-3 months",
      proposals: "12 proposals",
      posted: "Posted 2 days ago",
      skills: "Solidity, Web3.js, Smart Contracts, Blockchain Development",
      tags: ["Ethereum", "DeFi", "Blockchain"]
    },
    '2': {
      title: "Frontend Developer for E-commerce Site",
      description: "We need a skilled frontend developer to build the next version of our e-commerce platform using React and TailwindCSS.",
      budget: "$50-70/hr",
      duration: "1-2 months",
      proposals: "8 proposals",
      posted: "Posted 4 days ago",
      skills: "React, TailwindCSS, JavaScript, HTML, CSS",
      tags: ["Frontend", "E-commerce", "React"]
    },
    '3': {
      title: "Backend Developer for Inventory System",
      description: "Looking for a backend developer to create and manage APIs for our inventory system. Experience with Node.js and MongoDB required.",
      budget: "$60-90/hr",
      duration: "3-6 months",
      proposals: "5 proposals",
      posted: "Posted 1 week ago",
      skills: "Node.js, Express, MongoDB, REST APIs",
      tags: ["Backend", "Node.js", "MongoDB"]
    },
    '4': {
      title: "Mobile App Developer for Fitness App",
      description: "We're developing a fitness tracking app. We need an experienced mobile app developer with experience in React Native or Flutter.",
      budget: "$70-100/hr",
      duration: "2-4 months",
      proposals: "15 proposals",
      posted: "Posted 5 days ago",
      skills: "React Native, Flutter, Mobile Development, API Integration",
      tags: ["Mobile", "React Native", "Flutter"]
    },
    '5': {
      title: "UI/UX Designer for SaaS Platform",
      description: "Seeking a UI/UX designer to design the user interface for a SaaS platform. Experience in wireframing, prototyping, and user testing is a must.",
      budget: "$40-70/hr",
      duration: "1 month",
      proposals: "20 proposals",
      posted: "Posted 3 days ago",
      skills: "UI/UX Design, Wireframing, Prototyping, Figma",
      tags: ["UI/UX", "Design", "SaaS"]
    },
    '6': {
      title: "SEO Specialist for E-commerce Business",
      description: "We need an experienced SEO specialist to optimize our e-commerce website and increase organic traffic. Experience with Google Analytics, SEO tools, and content strategy is required.",
      budget: "$30-50/hr",
      duration: "Ongoing",
      proposals: "25 proposals",
      posted: "Posted 1 week ago",
      skills: "SEO, Google Analytics, Keyword Research, Content Strategy",
      tags: ["SEO", "E-commerce", "Marketing"]
    }
  };

  // Retrieve job data based on the ID
  const job = jobData[id];

  if (!job) {
    return <p>Job not found</p>;
  }

  return (
    <div className="p-6 bg-gray-800 rounded-xl">
      <h1 className="text-3xl font-bold text-white">{job.title}</h1>
      <p className="text-purple-400 mt-2">{job.posted}</p>
      <p className="mt-4 text-gray-300">{job.description}</p>

      <div className="mt-6 text-gray-300">
        <div className="flex items-center space-x-2">
          <span className="font-semibold">Budget:</span>
          <span>{job.budget}</span>
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <span className="font-semibold">Duration:</span>
          <span>{job.duration}</span>
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <span className="font-semibold">Proposals:</span>
          <span>{job.proposals}</span>
        </div>
        <div className="mt-4">
          <span className="font-semibold">Skills:</span>
          <ul className="list-disc pl-6">
            {job.skills.split(', ').map((skill: string, index: number) => (
              <li key={index} className="text-gray-400">{skill}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <span className="font-semibold">Tags:</span>
          <div className="flex space-x-2 mt-2">
            {job.tags.map((tag, index) => (
              <span key={index} className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <button className="mt-6 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
        Apply for Job
      </button>
    </div>
  );
};

export default JobDetails;
