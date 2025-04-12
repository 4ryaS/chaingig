import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Users, Clock, DollarSign } from 'lucide-react';

const Analytics = () => {
  const monthlyData = [
    { name: 'Jan', earnings: 4000, projects: 24 },
    { name: 'Feb', earnings: 3000, projects: 13 },
    { name: 'Mar', earnings: 2000, projects: 18 },
    { name: 'Apr', earnings: 2780, projects: 29 },
    { name: 'May', earnings: 1890, projects: 15 },
    { name: 'Jun', earnings: 2390, projects: 21 },
  ];

  const projectTypes = [
    { name: 'Smart Contracts', value: 400 },
    { name: 'DApps', value: 300 },
    { name: 'Blockchain Integration', value: 300 },
    { name: 'Web3 Development', value: 200 },
  ];

  const COLORS = ['#8b5cf6', '#6d28d9', '#5b21b6', '#4c1d95'];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Analytics Dashboard</h1>
        <div className="bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full flex items-center space-x-2">
          <TrendingUp className="w-5 h-5" />
          <span>Performance Overview</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded-xl">
          <div className="flex items-center space-x-3 mb-4">
            <DollarSign className="w-6 h-6 text-purple-500" />
            <h2 className="text-xl font-semibold text-white glowing-text">Total Earnings</h2>
          </div>
          <p className="text-3xl font-bold text-purple-400 glowing-text">$16,060</p>
          <p className="text-green-400 text-sm mt-2">+12.5% from last month</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl">
          <div className="flex items-center space-x-3 mb-4">
            <Users className="w-6 h-6 text-purple-500" />
            <h2 className="text-xl font-semibold text-white glowing-text">Active Clients</h2>
          </div>
          <p className="text-3xl font-bold text-purple-400 glowing-text">120</p>
          <p className="text-green-400 text-sm mt-2">+5% from last month</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl">
          <div className="flex items-center space-x-3 mb-4">
            <Clock className="w-6 h-6 text-purple-500" />
            <h2 className="text-xl font-semibold text-white glowing-text">Avg. Response Time</h2>
          </div>
          <p className="text-3xl font-bold text-purple-400 glowing-text">2.5h</p>
          <p className="text-green-400 text-sm mt-2">-30min from last month</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-gray-800 p-6 rounded-xl hover:bg-opacity-80 transition duration-300 ease-in-out">
          <h2 className="text-xl font-bold text-white mb-6 glowing-text">Monthly Earnings</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1F2937',
                    border: 'none',
                    borderRadius: '0.5rem',
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="earnings"
                  stroke="#8B5CF6"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl hover:bg-opacity-80 transition duration-300 ease-in-out">
          <h2 className="text-xl font-bold text-white mb-6 glowing-text">Projects by Type</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={projectTypes}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {projectTypes.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1F2937',
                    border: 'none',
                    borderRadius: '0.5rem',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-6">
            {projectTypes.map((type, index) => (
              <div key={type.name} className="flex items-center space-x-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: COLORS[index] }}
                ></div>
                <span className="text-gray-300 text-sm">{type.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-2 bg-gray-800 p-6 rounded-xl">
          <h2 className="text-xl font-bold text-white mb-6 glowing-text">Projects Overview</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '0.75rem',
                    boxShadow: '0 0 12px rgba(255, 255, 255, 0.3)',
                    color: '#fff',
                  }}
                  labelStyle={{ color: '#ccc' }}
                  itemStyle={{ color: '#fff' }}
                  cursor={{ fill: 'transparent' }}
                />
                <Bar
                  dataKey="projects"
                  fill="#A855F7"
                  radius={[4, 4, 0, 0]}
                  activeBar={{
                    fill: '#C084FC',
                    style: {
                      filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.6))',
                    },
                  }}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
