import React from 'react';
import Nav from './components/Nav';
import PersInfo from './components/PersInfo';

const App = () => {
  return (
    <>
      <div className="h-screen flex flex-col md:flex-row md:p-5">
        <div className="">
          <Nav />
        </div>
        <div className="mt-20">
          <PersInfo />
        </div>
      </div>
    </>
  );
};

export default App;
