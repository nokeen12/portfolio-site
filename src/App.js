import './App.scss';

import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Homepage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="routes">
      <Routes>
        <Route path="/" element={ <Homepage/> }/>
        <Route path="/home" element={ <Homepage/> }/>
      </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
