import React from 'react';

const PersInfo = () => {
  return (
    <>
      <div>
        <h3>Personal info</h3>
        <p>Please provide your name, email address, and phone number</p>
        <div className="form-persInfo">
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="e.g. Vanessa Mint"
            />
          </div>
          <div>
            <label htmlFor="email"></label>
            <input
              type="email"
              name="email"
              placeholder="e.g. vanessamint@gmail.com"
            />
          </div>
          <div>
            <label htmlFor="number"></label>
            <input
              type="text"
              name="number"
              placeholder="e.g. +1 234 567 890"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PersInfo;
