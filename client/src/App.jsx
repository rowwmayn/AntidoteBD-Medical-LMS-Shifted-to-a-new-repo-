import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import CourseSection from './components/CourseSection';
import Announcements from './components/Announcements';
import ExamSection from './components/ExamSection';
import Footer from './components/Footer';
//import NavBar from './components/NavBar'; // Ensure the correct path to the NavBar component

function App() {
  return (
    <Router>
      <NavigationBar/>
      <Announcements/>
      <CourseSection/>
      <ExamSection/>
      <Footer/>
    </Router>
  );
}

export default App;