import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, UserCircle, Briefcase, MessageSquare, BarChart3, Wallet, Users } from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { icon: Users, label: 'Client Dashboard', path: '/client' },
    { icon: UserCircle, label: 'Profile', path: '/profile' },
    { icon: Briefcase, label: 'Jobs', path: '/jobs' },
    { icon: MessageSquare, label: 'Chat', path: '/chat' },
    { icon: BarChart3, label: 'Analytics', path: '/analytics' },
    { icon: Wallet, label: 'Wallet', path: '/wallet' },
  ];

  return (
    <div className="w-64 bg-gray-800 p-6">
      <nav>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center space-x-3 p-3 rounded-lg mb-2 transition-colors ${
                isActive
                  ? 'bg-purple-500 text-white'
                  : 'text-gray-300 hover:bg-gray-700'
              }`
            }
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;