import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import GitHub from './components/pages/GitHub';
import Resume from './components/pages/Resume';
import Resources from './components/pages/Resources';
import Contact from './components/pages/Contact';
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/" exact element={<GitHub/>}/>
          <Route path="/" exact element={<Resume/>}/>
          <Route path="/" exact element={<Resources/>}/>
          <Route path="/" exact element={<Contact/>}/>
        </Routes>

      </Router>
    </div>
  );
}

export default App;
