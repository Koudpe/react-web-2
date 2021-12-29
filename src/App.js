import React from "react";
import Page from "./Page";
import Page1 from "./Page1";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";

import "./App.css";

const App = () => {
  return (
    <Router>
      <div className='app'>
        <div>
          <Nav />
        </div>
        <div>
          <Routes>
            <Route path='/' element={<Page />} />
            <Route path='/page1' element={<Page1 />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
