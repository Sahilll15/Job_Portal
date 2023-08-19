import React, { useState } from 'react';
import ResumeBuilder from './Components/ResumeForm';
import ResumeViewer from './Components/ResumeViewer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginForm from './pages/LoginForm';
import Home from './pages/Home';
import NavBar from './Components/Navbar';
import Help from './pages/Help';
import DashBoard from './pages/DashBoard';
import Resources from './pages/Resources';
import Services from './pages/Services';
import Companies from './pages/Companies';
import SignUp from './pages/SignUpAsSeeker';
import SignUpasAProvider from './pages/SignUpasAProvider';
import Footer from './Components/Footer';
import BlogPage from './pages/BlogPage';
import InterviewPrepPage from './pages/InterviewPrepPage';
const App = () => {
  const [resumeData, setResumeData] = useState(null);

  const handleFormSubmit = (data) => {
    setResumeData(data);
  };

  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signupasseeker" element={<SignUp />} />
          <Route path="/signupasaprovider" element={<SignUpasAProvider />} />
          <Route path="/services" element={<Services />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home />} />
          <Route path="/help" element={<Help />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/interviewprep" element={<InterviewPrepPage />} />
          <Route path="/resume" element={resumeData ? <ResumeViewer data={resumeData} /> : <ResumeBuilder onFormSubmit={handleFormSubmit} />} />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
