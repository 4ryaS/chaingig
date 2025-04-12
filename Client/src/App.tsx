import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard'; // Optional
import ClientDashboard from './pages/ClientDashboard';
import Profile from './pages/Profile';
import JobPostings from './pages/JobPostings';
import JobDetails from './pages/JobDetails';
import Chat from './pages/Chat';
import Analytics from './pages/Analytics';
import Navbar from './components/Navbar';
import AllFreelancers from './pages/AllFreelancers';
import Notifications from './pages/Notifications'; // ✅ NEW

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <div className="flex min-h-screen bg-gray-900">
          <Sidebar />
          <div className="flex-1 p-8">
            <Routes>
              <Route path="/" element={<Navigate to="/client" replace />} />
              <Route path="/client" element={<ClientDashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/jobs" element={<JobPostings />} />
              <Route path="/jobs/:id" element={<JobDetails />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/freelancers" element={<AllFreelancers />} />
              <Route path="/notifications" element={<Notifications />} /> {/* ✅ NEW */}
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
