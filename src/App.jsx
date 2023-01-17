import React from 'react';
import Nav from './components/Nav';
import PersInfo from './components/PersInfo';
import Plan from './components/Plan';

const App = () => {
  return (
    <>
      <div className="grid-component">
        <div className="navigation">
          <Nav />
        </div>
        <div className="content flex flex-col w-full h-full p-5 bg-magnolia md:bg-white md:pt-5">
          {/* <PersInfo />        */}
          <Plan />
        </div>
      </div>
    </>
  );
};

export default App;
