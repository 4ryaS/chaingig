import React from 'react';
import { Link } from 'react-router-dom';
import { Wallet, Bell, User, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-purple-500/20 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <Wallet className="h-8 w-8 text-purple-500 transform group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-xl font-bold text-white">ChainGig</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
              <Bell className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            </button>
            <Link to="/profile" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                <User className="h-5 w-5 text-white" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;