import React from 'react';
import ImgMob from '../assets/bg-sidebar-mobile.svg';
import ImgPc from '../assets/bg-sidebar-desktop.svg';

const Nav = () => {
  return (
    <>
      <div className="navbar relative">
        <img
          src={ImgMob}
          alt="brand image for mobile screens"
          className="mob-image flex md:hidden w-full"
        />
        <img
          src={ImgPc}
          alt="brand image for desktop screens"
          className=" desktop-image hidden md:flex"
        />
        {/* Links for navigation */}
        <div className="nav-links absolute flex justify-between w-full md:flex-col md:gap-8">
          <div className="flex items-center md:gap-5">
            <button className="link-btn">1</button>
            <p className="hidden md:flex flex-col text-xs text-pastel">
              STEP 1<br />
              <span className="font-bold text-light-gray text-sm ">
                YOUR INFO
              </span>
            </p>
          </div>
          <div className="flex items-center md:gap-5">
            <button className="link-btn">2</button>
            <p className="hidden md:flex flex-col text-xs text-pastel">
              STEP 2<br />
              <span className="font-bold text-light-gray text-sm ">
                SELECT PLAN
              </span>
            </p>
          </div>
          <div className="flex items-center md:gap-5">
            <button className="link-btn">3</button>
            <p className="hidden md:flex flex-col text-xs text-pastel">
              STEP 3<br />
              <span className="font-bold text-light-gray text-sm ">
                ADD-ONS
              </span>
            </p>
          </div>
          <div className="flex items-center md:gap-5">
            <button className="link-btn">4</button>
            <p className="hidden md:flex flex-col text-xs text-pastel">
              STEP 4<br />
              <span className="font-bold text-light-gray text-sm ">
                SUMMARY
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
