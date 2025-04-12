import React from 'react';
import {
  Activity,
  Users,
  DollarSign,
  Star,
  TrendingUp
} from 'lucide-react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from 'recharts';
import { Link } from 'react-router-dom';

const ClientDashboard: React.FC = () => {
  const projectData = [
    { month: 'Jan', spend: 12000, projects: 3 },
    { month: 'Feb', spend: 15000, projects: 4 },
    { month: 'Mar', spend: 8000, projects: 2 },
    { month: 'Apr', spend: 20000, projects: 5 },
    { month: 'May', spend: 18000, projects: 4 },
    { month: 'Jun', spend: 22000, projects: 6 },
  ];

  return (
    <div className="space-y-8 p-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold text-white">Client Dashboard</h1>
        <div className="bg-purple-500/10 text-purple-400 px-5 py-2 rounded-full flex items-center space-x-2 shadow-md">
          <TrendingUp className="w-5 h-5" />
          <span>Project Overview</span>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            icon: <Activity className="w-6 h-6 text-purple-500" />,
            title: 'Active Projects',
            value: 6,
            note: '+2 from last month',
            noteColor: 'text-green-400'
          },
          {
            icon: <Users className="w-6 h-6 text-purple-500" />,
            title: 'Hired Freelancers',
            value: 15,
            note: '+3 new this month',
            noteColor: 'text-green-400'
          },
          {
            icon: <DollarSign className="w-6 h-6 text-purple-500" />,
            title: 'Total Spent',
            value: '$95,000',
            note: 'This year',
            noteColor: 'text-gray-400'
          },
          {
            icon: <Star className="w-6 h-6 text-purple-500" />,
            title: 'Avg. Rating',
            value: 4.9,
            note: 'From freelancers',
            noteColor: 'text-gray-400'
          }
        ].map((card, idx) => (
          <div
            key={idx}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg transition-all duration-300 group hover:ring-4 group-hover:ring-purple-500/50"
          >
            <div className="flex items-center space-x-3 mb-3">
              {card.icon}
              <h2 className="text-lg font-semibold text-white">{card.title}</h2>
            </div>
            <p className="text-3xl font-bold text-purple-400">{card.value}</p>
            <p className={`text-sm mt-1 ${card.noteColor}`}>{card.note}</p>
          </div>
        ))}
      </div>

      {/* Charts & Timeline */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Spending Chart */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-md transition-all group hover:ring-4 group-hover:ring-purple-500/30">
          <h2 className="text-xl font-bold text-white mb-6">Monthly Spending</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={projectData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1F2937',
                    border: 'none',
                    borderRadius: '0.5rem'
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="spend"
                  stroke="#8B5CF6"
                  strokeWidth={3}
                  dot={{ stroke: '#8B5CF6', strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Project Timeline */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-md transition-all group hover:ring-4 group-hover:ring-purple-500/30">
          <h2 className="text-xl font-bold text-white mb-6">Projects Timeline</h2>
          <div className="space-y-4">
            {[
              { name: 'DeFi Platform Development', deadline: '2 days', progress: 85 },
              { name: 'Smart Contract Audit', deadline: '1 week', progress: 60 },
              { name: 'NFT Marketplace', deadline: '2 weeks', progress: 30 },
              { name: 'Wallet Integration', deadline: '3 weeks', progress: 15 },
            ].map((project) => (
              <div key={project.name} className="bg-gray-700/60 p-4 rounded-xl hover:bg-gray-700 transition">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-white">{project.name}</h3>
                    <p className="text-sm text-gray-400">Due in {project.deadline}</p>
                  </div>
                  <span className="text-purple-400 font-semibold">{project.progress}%</span>
                </div>
                <div className="w-full h-2 bg-gray-600 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-purple-500 transition-all duration-300"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Active Freelancers */}
      <div className="col-span-2 bg-gray-800 p-6 rounded-2xl shadow-md transition-all group hover:ring-4 group-hover:ring-purple-500/30">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-white">Active Freelancers</h2>
          <Link
            to="/freelancers"
            className="text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium"
          >
            View All
          </Link>
        </div>
        <div className="grid gap-4">
          {[
            {
              name: 'Sarah Chen',
              role: 'Smart Contract Developer',
              rating: 5.0,
              image:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80',
              status: 'In Progress'
            },
            {
              name: 'Michael Rodriguez',
              role: 'Blockchain Architect',
              rating: 4.9,
              image:
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80',
              status: 'In Review'
            },
            {
              name: 'Emma Wilson',
              role: 'Frontend Developer',
              rating: 4.8,
              image:
                'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&q=80',
              status: 'Starting Soon'
            }
          ].map((freelancer) => (
            <div
              key={freelancer.name}
              className="flex items-center justify-between p-4 bg-gray-700/60 rounded-xl hover:bg-gray-700 transition ring-4 ring-purple-500/30 group"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={freelancer.image}
                  alt={freelancer.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-purple-500"
                />
                <div>
                  <h3 className="font-semibold text-white">{freelancer.name}</h3>
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
    </div>
  );
};

export default ClientDashboard;
