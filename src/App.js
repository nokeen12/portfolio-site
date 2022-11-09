import './App.scss';

import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/ProjectsPage';

function App() {
  window.onload = () => {
    const load = document.querySelector(".loader-wrapper")
    load.style.cssText += 'animation: loaded 1s forwards;';
  }
  return (
    <div className="App">
      <Navbar />
      <div className="routes">
      <Routes>
        <Route path="/portfolio-site/" element={ <HomePage/> }/>
        <Route path="/portfolio-site/home" element={ <HomePage/> }/>
        <Route path="/portfolio-site/projects" element={ <ProjectsPage/> }/>
        <Route path="/portfolio-site/contact" element={ <ContactPage/> }/>
      </Routes>
      </div>
      <Footer/>
      <div className="loader-wrapper">
            <span className="loader"><span className="loader-inner"></span></span>
      </div>
    </div>
  );
}

export default App;
