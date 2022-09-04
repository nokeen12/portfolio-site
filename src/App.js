import './App.scss';

import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="routes">
      <Routes>
        <Route path="/" element={ <Homepage/> }/>
        <Route path="/home" element={ <Homepage/> }/>
        <Route path="/projects" element={ <Projects/> }/>
        <Route path="/contact" element={ <Contact/> }/>
      </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
