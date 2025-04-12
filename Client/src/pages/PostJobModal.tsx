// PostJobModal.tsx
import React, { useState } from 'react';

interface PostJobModalProps {
  showModal: boolean;
  onClose: () => void;
  onPostJob: (job: { title: string; description: string; category: string; rate: string; duration: string; technology: string }) => void;
}

const PostJobModal: React.FC<PostJobModalProps> = ({ showModal, onClose, onPostJob }) => {
  const [newJob, setNewJob] = useState({
    title: '',
    description: '',
    category: '',
    rate: '',
    duration: '',
    technology: '',
  });

  const handleJobPostChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewJob((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePostJob = () => {
    onPostJob(newJob);
    onClose(); // Close the modal after posting the job
    setNewJob({
      title: '',
      description: '',
      category: '',
      rate: '',
      duration: '',
      technology: '',
    }); // Reset form after submitting
  };

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-gray-800 p-8 rounded-xl w-full max-w-2xl">
            <h2 className="text-2xl font-bold text-white mb-6">Create New Job Posting</h2>

            <div className="space-y-4">
              <input
                type="text"
                name="title"
                value={newJob.title}
                onChange={handleJobPostChange}
                placeholder="Job Title"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500"
              />
              <textarea
                name="description"
                value={newJob.description}
                onChange={handleJobPostChange}
                placeholder="Job Description"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500"
              />
              <input
                type="text"
                name="category"
                value={newJob.category}
                onChange={handleJobPostChange}
                placeholder="Category"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500"
              />
              <input
                type="text"
                name="rate"
                value={newJob.rate}
                onChange={handleJobPostChange}
                placeholder="Hourly Rate"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500"
              />
              <input
                type="text"
                name="duration"
                value={newJob.duration}
                onChange={handleJobPostChange}
                placeholder="Duration"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500"
              />
              <input
                type="text"
                name="technology"
                value={newJob.technology}
                onChange={handleJobPostChange}
                placeholder="Technology"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-purple-500"
              />
            </div>

            <div className="flex justify-end space-x-4 mt-6">
              <button
                onClick={onClose}
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
    </>
  );
};

export default PostJobModal;
