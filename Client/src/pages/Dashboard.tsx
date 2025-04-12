import React from 'react';
import { Activity, Users, DollarSign, Briefcase } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Dashboard</h1>
      
      <div className="grid grid-cols-4 gap-6">
        <div className="bg-gray-800 p-6 rounded-xl">
          <div className="flex items-center space-x-3">
            <Activity className="w-6 h-6 text-purple-500" />
            <h2 className="text-lg font-semibold text-white">Active Projects</h2>
          </div>
          <p className="text-3xl font-bold text-purple-400 mt-2">4</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl">
          <div className="flex items-center space-x-3">
            <Users className="w-6 h-6 text-purple-500" />
            <h2 className="text-lg font-semibold text-white">Total Clients</h2>
          </div>
          <p className="text-3xl font-bold text-purple-400 mt-2">12</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl">
          <div className="flex items-center space-x-3">
            <DollarSign className="w-6 h-6 text-purple-500" />
            <h2 className="text-lg font-semibold text-white">Earnings</h2>
          </div>
          <p className="text-3xl font-bold text-purple-400 mt-2">$24,500</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl">
          <div className="flex items-center space-x-3">
            <Briefcase className="w-6 h-6 text-purple-500" />
            <h2 className="text-lg font-semibold text-white">Completed</h2>
          </div>
          <p className="text-3xl font-bold text-purple-400 mt-2">45</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-gray-800 p-6 rounded-xl">
          <h2 className="text-xl font-bold text-white mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center space-x-4 text-gray-300">
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                <p>New proposal submitted for DeFi Project</p>
                <span className="text-sm text-gray-500">2h ago</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl">
          <h2 className="text-xl font-bold text-white mb-4">Upcoming Deadlines</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between text-gray-300 p-3 rounded-lg bg-gray-700/50">
                <div>
                  <h3 className="font-semibold">Smart Contract Audit</h3>
                  <p className="text-sm text-gray-400">Due in {i} days</p>
                </div>
                <div className="text-purple-400">
                  March {10 + i}, 2024
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;