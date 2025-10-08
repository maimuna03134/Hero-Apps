import React from 'react';
import playstore from '../../assets/playstore.png'
import appstore from '../../assets/Group.png'
import hero_img from '../../assets/hero.png'

const Banner = () => {
    return (
      <div className="hero bg-base-200 min-h-screen my-10">
        <div className="hero-content text-center flex flex-col">
          <div>
        
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
                Our goal is to turn your ideas into digital experiences that
                truly make an impact.
              </p>
              {/* banner button */}
              <div className="flex justify-center items-center gap-2">
                <button className="btn border-2">
                  <img className="w-5" src={playstore} alt="" />
                  <span>Google Play</span>
                </button>
                <button className="btn border-2">
                  <img className="w-5" src={appstore} alt="" />
                  <span>App Store</span>
                </button>
              </div>
              {/* hero image */}
              <div className="mt-5 flex justify-center">
                <img
                  className="w-[260px] md:w-[350px] drop-shadow-2xl"
                  src={hero_img}
                  alt=""
                />
              </div>
      
            {/* star section */}
            <div className="w-screen bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white  py-10  px-5">
              <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-2xl font-semibold mb-6">
                  Trusted by Millions, Built for You
                </h2>
                <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                  <div>
                    <p className="text-sm opacity-90">Total Downloads</p>
                    <h3 className="text-3xl font-bold">29.6M</h3>
                    <p className="text-sm opacity-90">
                      21% more than last month
                    </p>
                  </div>
                  <div>
                    <p className="text-sm opacity-90">Total Reviews</p>
                    <h3 className="text-3xl font-bold">906K</h3>
                    <p className="text-sm opacity-90">
                      46% more than last month
                    </p>
                  </div>
                  <div>
                    <p className="text-sm opacity-90">Active Apps</p>
                    <h3 className="text-3xl font-bold">132+</h3>
                    <p className="text-sm opacity-90">31 more will Launch</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;