import React from 'react';
import { Star, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const freelancers = [
  {
    name: 'Sarah Chen',
    role: 'Smart Contract Developer',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80',
    status: 'In Progress',
  },
  {
    name: 'Michael Rodriguez',
    role: 'Blockchain Architect',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80',
    status: 'In Review',
  },
  {
    name: 'Emma Wilson',
    role: 'Frontend Developer',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80',
    status: 'Starting Soon',
  },
  {
    name: 'Liam Patel',
    role: 'Backend Developer',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80',
    status: 'Available',
  },
];

const AllFreelancers = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">All Active Freelancers</h1>
        <button
          onClick={() => navigate('/client')}
          className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm font-medium">Back to Dashboard</span>
        </button>
      </div>

      {/* Freelancer Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {freelancers.map((freelancer) => (
          <div
            key={freelancer.name}
            className="flex items-center justify-between p-5 bg-gray-800 rounded-2xl shadow-md hover:ring-4 hover:ring-purple-500/30 transition-all"
          >
            <div className="flex items-center space-x-4">
              <img
                src={freelancer.image}
                alt={freelancer.name}
                className="w-14 h-14 rounded-full object-cover ring-2 ring-purple-500"
              />
              <div>
                <h3 className="text-white font-semibold text-lg">{freelancer.name}</h3>
                <p className="text-sm text-gray-400">{freelancer.role}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-white text-sm">{freelancer.rating}</span>
              </div>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium">
                {freelancer.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllFreelancers;
