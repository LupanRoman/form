import React from 'react';
import Nav from './components/Nav';
import PersInfo from './components/PersInfo';

const App = () => {
  return (
    <>
      <div className="grid-component">
        <div className="navigation">
          <Nav />
        </div>
        <div className="content flex flex-col w-full h-full p-5 bg-magnolia md:bg-white md:pt-5">
          <PersInfo />
        </div>
      </div>
    </>
  );
};

export default App;
