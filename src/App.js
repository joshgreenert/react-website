import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import GitHub from './components/pages/GitHub';
import Resume from './components/pages/Resume';
import Resources from './components/pages/Resources';
import Contact from './components/pages/Contact';
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import './App.css';

const BASE_PATH = '/react-website/';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path={`${BASE_PATH}`} element={<Home />} />
          <Route path={`${BASE_PATH}github/`} element={<GitHub />} />
          <Route path={`${BASE_PATH}resume/`} element={<Resume />} />
          <Route path={`${BASE_PATH}resources/`} element={<Resources />} />
          <Route path={`${BASE_PATH}contact/`} element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
