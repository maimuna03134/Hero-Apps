import React from 'react';
import playstore from '../../assets/playstore.png'
import appstore from '../../assets/Group.png'

const Banner = () => {
    return (
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-6xl font-bold">
              We Build{" "}
              <span className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent ">
                <br />
                Productive
              </span>{" "}
              Apps
            </h1>
            <p className="py-6">
              At HERO.IO , we craft innovative apps designed to make everyday
              life simpler, smarter, and more exciting. <br />
              Our goal is to turn your ideas into digital experiences that truly
              make an impact.
            </p>
            <div className='flex justify-center items-center gap-2'>
              <button className="btn border-2">
                <img className="w-5" src={playstore} alt="" />
                <span>Google Play</span>
              </button>
              <button className="btn border-2">
                <img className="w-5" src={appstore} alt="" />
                <span>App Store</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;