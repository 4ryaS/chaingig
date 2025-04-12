import React from 'react';
import { Star, Award, Shield, Clock } from 'lucide-react';

const Profile = () => {
  return (
    <div className="space-y-8">
      <div className="bg-gray-800 rounded-xl p-8 hover:border-purple-500 hover:ring-2 hover:ring-purple-500 transition-all duration-300 ease-in-out border-2 border-purple-500/30">
        <div className="flex items-start space-x-6">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-purple-500"
          />
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold text-white">John Developer</h1>
                <p className="text-purple-400">Full Stack Blockchain Developer</p>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500 px-4 py-2 rounded-full">
                <Star className="w-5 h-5" />
                <span className="font-semibold">4.9/5.0</span>
              </div>
            </div>
            <p className="mt-4 text-gray-300">
              Experienced blockchain developer specializing in smart contracts and DApp development.
              5+ years of experience in Web3 technologies.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded-xl hover:border-purple-500 hover:ring-2 hover:ring-purple-500 transition-all duration-300 ease-in-out border-2 border-purple-500/30">
          <div className="flex items-center space-x-3 mb-4">
            <Shield className="w-6 h-6 text-purple-500" />
            <h2 className="text-xl font-semibold text-white">Reputation Score</h2>
          </div>
          <div className="text-3xl font-bold text-purple-400">98.5%</div>
          <p className="text-gray-400 mt-2">Based on 45 completed projects</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl hover:border-purple-500 hover:ring-2 hover:ring-purple-500 transition-all duration-300 ease-in-out border-2 border-purple-500/30">
          <div className="flex items-center space-x-3 mb-4">
            <Award className="w-6 h-6 text-purple-500" />
            <h2 className="text-xl font-semibold text-white">Success Rate</h2>
          </div>
          <div className="text-3xl font-bold text-purple-400">100%</div>
          <p className="text-gray-400 mt-2">All projects completed successfully</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl hover:border-purple-500 hover:ring-2 hover:ring-purple-500 transition-all duration-300 ease-in-out border-2 border-purple-500/30">
          <div className="flex items-center space-x-3 mb-4">
            <Clock className="w-6 h-6 text-purple-500" />
            <h2 className="text-xl font-semibold text-white">Response Time</h2>
          </div>
          <div className="text-3xl font-bold text-purple-400">2h</div>
          <p className="text-gray-400 mt-2">Average response time</p>
        </div>
      </div>

      <div className="bg-gray-800 rounded-xl p-8 hover:border-purple-500 hover:ring-2 hover:ring-purple-500 transition-all duration-300 ease-in-out border-2 border-purple-500/30">
        <h2 className="text-2xl font-bold text-white mb-6">Recent Projects</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="border border-gray-700 p-4 rounded-lg hover:border-purple-500 hover:ring-2 hover:ring-purple-500 transition-all duration-300 ease-in-out"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    DeFi Exchange Platform
                  </h3>
                  <p className="text-gray-400">Completed on March {i}, 2024</p>
                </div>
                <div className="flex items-center space-x-1 text-yellow-500">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="mt-2 text-gray-300">
                Developed a decentralized exchange platform with automated market maker functionality.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
