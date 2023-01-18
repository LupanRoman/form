import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import PersInfo from './components/PersInfo';
import Plan from './components/Plan';
import AddOns from './components/AddOns';
import Summary from './components/Summary';

const App = () => {
  return (
    <>
      <Router>
        <div className="grid-component">
          <div className="navigation">
            <Nav />
          </div>
          <div className="content flex flex-col w-full h-full p-5 bg-magnolia md:bg-white md:pt-5">
            <Routes>
              <Route path="/" element={<PersInfo />} />
              <Route path="/plan" element={<Plan />} />
              <Route path="/add-ons" element={<AddOns />} />
              <Route path="/summary" element={<Summary />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
};

export default App;
