import React, { useState } from 'react';
import { Plus, Search, Filter, DollarSign, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import FilterComponent from './FilterComponent';

const JobPostings = () => {
  const [showNewJobModal, setShowNewJobModal] = useState(false);
  const [showFilters, setShowFilters] = useState(false);  // State to toggle the filter modal
  const [filters, setFilters] = useState({ category: '', technology: '', rate: '' });
  const [searchQuery, setSearchQuery] = useState('');  // State to hold the search query
  const [newJob, setNewJob] = useState({
    title: '',
    description: '',
    category: '',
    rate: '',
    duration: '',
    technology: '',
  });

  const jobs = [
    { id: 1, title: "Smart Contract Developer Needed", description: "Looking for an experienced smart contract developer to build and audit our DeFi protocol.", category: "DeFi Project", posted: "2 days ago", rate: "$80-120/hr", duration: "2-3 months", proposals: "12 proposals", technology: "Ethereum" },
    { id: 2, title: "Frontend Developer for NFT Platform", description: "We need a frontend developer for our upcoming NFT marketplace.", category: "NFT Platform", posted: "1 week ago", rate: "$70-100/hr", duration: "3-6 months", proposals: "8 proposals", technology: "React, Web3.js" },
    { id: 3, title: "Blockchain Security Expert", description: "Looking for an expert to audit smart contracts and perform security assessments.", category: "Blockchain Security", posted: "3 days ago", rate: "$100-150/hr", duration: "1-2 months", proposals: "15 proposals", technology: "Solidity, Ethereum" },
    { id: 4, title: "Mobile App Developer for Fitness App", description: "We're developing a fitness tracking app. We need an experienced mobile app developer with experience in React Native or Flutter.", category: "Mobile Development", posted: "Posted 5 days ago", rate: "$70-100/hr", duration: "2-4 months", proposals: "15 proposals", technology: "React Native, Flutter", skills: "Mobile Development, API Integration" },
    { id: 5, title: "UI/UX Designer for SaaS Platform", description: "Seeking a UI/UX designer to design the user interface for a SaaS platform. Experience in wireframing, prototyping, and user testing is a must.", category: "Design", posted: "Posted 3 days ago", rate: "$40-70/hr", duration: "1 month", proposals: "20 proposals", technology: "UI/UX Design, Wireframing", skills: "Figma" },
    { id: 6, title: "SEO Specialist for E-commerce Business", description: "We need an experienced SEO specialist to optimize our e-commerce website and increase organic traffic. Experience with Google Analytics, SEO tools, and content strategy is required.", category: "Marketing", posted: "Posted 1 week ago", rate: "$30-50/hr", duration: "Ongoing", proposals: "25 proposals", technology: "SEO, Google Analytics", skills: "Keyword Research, Content Strategy" },
  ];

  const handleFilterChange = (filters: { category: string; technology: string; rate: string }) => {
    setFilters(filters);
    setShowFilters(false);  // Hide the filter modal after applying
  };

  const handleJobInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewJob((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePostJob = () => {
    console.log("Job Posted:", newJob);
    setShowNewJobModal(false); // Close the modal after posting
  };

  // Filter jobs based on the selected filters
  const filteredJobs = jobs.filter((job) => {
    const matchesCategory = filters.category ? job.category === filters.category : true;
    const matchesTechnology = filters.technology ? job.technology.includes(filters.technology) : true;
    const matchesRate = filters.rate ? job.rate === filters.rate : true;
    const matchesSearchQuery = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || job.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesTechnology && matchesRate && matchesSearchQuery;
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Job Postings</h1>
        <button
          onClick={() => setShowNewJobModal(true)}
          className="flex items-center space-x-2 bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition-colors"
        >
          <Plus className="w-5 h-5" />
          <span>Post New Job</span>
        </button>
      </div>

      <div className="flex space-x-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search jobs..."
            className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}  // Update search query on change
          />
        </div>
        <button
          onClick={() => setShowFilters(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white hover:bg-gray-700 transition-colors"
        >
          <Filter className="w-5 h-5" />
          <span>Filters</span>
        </button>
      </div>

      {/* Show the filter modal */}
      {showFilters && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <FilterComponent onFilter={handleFilterChange} />
        </div>
      )}

      <div className="grid gap-6">
        {filteredJobs.map((job) => (
          <Link key={job.id} to={`/jobs/${job.id}`} className="bg-gray-800 rounded-xl p-6 hover:border-purple-500 hover:ring-2 hover:ring-purple-500 transition-all duration-300 ease-in-out border-2 border-purple-500/30">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-white">{job.title}</h2>
                <p className="text-purple-400 mt-1">{job.category} • Posted {job.posted}</p>
              </div>
              <div className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full text-sm">
                {job.technology}
              </div>
            </div>

            <p className="mt-4 text-gray-300">{job.description}</p>

            <div className="mt-6 flex items-center space-x-6 text-gray-300">
              <div className="flex items-center space-x-2">
                <DollarSign className="w-5 h-5 text-purple-400" />
                <span>{job.rate}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-purple-400" />
                <span>{job.duration}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-purple-400" />
                <span>{job.proposals}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Job Post Modal */}
      {showNewJobModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-gray-800 p-8 rounded-xl w-full max-w-2xl">
            <h2 className="text-2xl font-bold text-white mb-6">Create New Job Posting</h2>
            <input
              type="text"
              name="title"
              value={newJob.title}
              onChange={handleJobInputChange}
              placeholder="Job Title"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500 mb-4"
            />
            <textarea
              name="description"
              value={newJob.description}
              onChange={handleJobInputChange}
              placeholder="Job Description"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500 mb-4"
            />
            <input
              type="text"
              name="category"
              value={newJob.category}
              onChange={handleJobInputChange}
              placeholder="Category"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500 mb-4"
            />
            <input
              type="text"
              name="rate"
              value={newJob.rate}
              onChange={handleJobInputChange}
              placeholder="Rate"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500 mb-4"
            />
            <input
              type="text"
              name="duration"
              value={newJob.duration}
              onChange={handleJobInputChange}
              placeholder="Duration"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500 mb-4"
            />
            <input
              type="text"
              name="technology"
              value={newJob.technology}
              onChange={handleJobInputChange}
              placeholder="Technology"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500 mb-4"
            />

            <div className="flex justify-end space-x-4 mt-6">
              <button
                onClick={() => setShowNewJobModal(false)}
                className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handlePostJob}
                className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
              >
                Post Job
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobPostings;
