import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './css/App.css';
import "./css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavPane from './components/navpane.js';
import Footer from './components/footer/footer.js';
import Profiles from './components/profiles/profiles.js';
import Home from './components/home/home.js';
import ServiceMenu from './components/service-menu/service-menu.js';
import Store from './components/store/store.js';


function App() {
  return (
    <Router>
      <div className="App">
        <NavPane />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ServiceMenu' element={<ServiceMenu />} />
          <Route path='/Profiles' element={<Profiles />} />
          <Route path='/Store' element={<Store />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
