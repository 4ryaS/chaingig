import React, { useState } from 'react';

interface FilterProps {
  onFilter: (filters: { category: string; technology: string; rate: string }) => void;
}

const FilterComponent: React.FC<FilterProps> = ({ onFilter }) => {
  const [category, setCategory] = useState('');
  const [technology, setTechnology] = useState('');
  const [rate, setRate] = useState('');

  const handleApplyFilters = () => {
    onFilter({ category, technology, rate });
  };

  return (
    <div className="bg-gray-800 p-6 rounded-xl w-full max-w-md">
      <h2 className="text-2xl font-bold text-white mb-6">Filters</h2>

      {/* Category Filter */}
      <div className="mb-4">
        <label className="text-sm text-gray-300">Category</label>
        <select
          className="w-full bg-gray-700 text-white p-2 rounded-md mt-2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="DeFi Project">DeFi Project</option>
          <option value="NFT Platform">NFT Platform</option>
          <option value="Blockchain Security">Blockchain Security</option>
        </select>
      </div>

      {/* Technology Filter */}
      <div className="mb-4">
        <label className="text-sm text-gray-300">Technology</label>
        <select
          className="w-full bg-gray-700 text-white p-2 rounded-md mt-2"
          value={technology}
          onChange={(e) => setTechnology(e.target.value)}
        >
          <option value="">All Technologies</option>
          <option value="Ethereum">Ethereum</option>
          <option value="Solidity">Solidity</option>
          <option value="React, Web3.js">React, Web3.js</option>
        </select>
      </div>

      {/* Rate Filter */}
      <div className="mb-4">
        <label className="text-sm text-gray-300">Rate</label>
        <select
          className="w-full bg-gray-700 text-white p-2 rounded-md mt-2"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        >
          <option value="">All Rates</option>
          <option value="$80-120/hr">$80-120/hr</option>
          <option value="$70-100/hr">$70-100/hr</option>
          <option value="$100-150/hr">$100-150/hr</option>
        </select>
      </div>

      <div className="flex justify-end space-x-4">
        <button
          onClick={() => onFilter({ category: '', technology: '', rate: '' })}
          className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
        >
          Clear
        </button>
        <button
          onClick={handleApplyFilters}
          className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default FilterComponent;
