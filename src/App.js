import './App.scss';

import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/ProjectsPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="routes">
      <Routes>
        <Route path="/" element={ <HomePage/> }/>
        <Route path="/home" element={ <HomePage/> }/>
        <Route path="/projects" element={ <ProjectsPage/> }/>
        <Route path="/contact" element={ <ContactPage/> }/>
      </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
