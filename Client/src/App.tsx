import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import ClientDashboard from './pages/ClientDashboard';
import Profile from './pages/Profile';
import JobPostings from './pages/JobPostings';
import JobDetails from './pages/JobDetails';  // New component for job details
import Chat from './pages/Chat';
import Analytics from './pages/Analytics';
import Navbar from './components/Navbar';
import AllFreelancers from './pages/AllFreelancers';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <div className="flex min-h-screen bg-gray-900">
          <Sidebar />
          <div className="flex-1 p-8">
            <Routes>
              <Route path="/client" element={<ClientDashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/jobs" element={<JobPostings />} />
              <Route path="/jobs/:id" element={<JobDetails />} /> {/* New route for job details */}
              <Route path="/chat" element={<Chat />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/freelancers" element={<AllFreelancers />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
