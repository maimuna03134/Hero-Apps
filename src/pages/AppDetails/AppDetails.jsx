import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useApps from '../../hooks/useApps';
import { LuDownload } from "react-icons/lu";
import { IoStar } from "react-icons/io5";
import downloadImg from '../../assets/icon_downloads.png'
import starImg from '../../assets/icon_ratings.png'
import reviewImg from '../../assets/icon-review.png'
import Container from '../../components/Container/Container';
import RatingChart from '../RatingChart/RatingChart';
import ErrorPage from '../ErrorPage/ErrorPage';
import Loader from '../../components/Loader/Loader';
import ErrorApps from '../ErrorApps/ErrorApps';

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading, error } = useApps();

  const [showLoader, setShowLoader] = useState(true);
  
  const app = apps.find((a) => a.id === Number(id));

 useEffect(() => {
     const timeOut = setTimeout(() => {
       setShowLoader(false);
     }, 500);
 
     return () => clearTimeout(timeOut)
   }, []);

    if (error) {
      return <ErrorPage></ErrorPage>;
    }

    if (loading || showLoader) {
      return <Loader></Loader>;
    }

    if (!loading && apps.length === 0) {
      return <ErrorApps></ErrorApps>;
  }
  
  const {
    image,
    title,
    shortDescription,
    companyName,
    downloads,
    ratingAvg,
    reviews,
    size,
    ratings,
    description,
  } = app || {};
  return (
    <Container>
      <div className="my-16">
        <div className="hero-content flex-col justify-center items-stretch lg:flex-row ">
          <div className="flex justify-center lg:w-1/3">
            <img
              src={image}
              className="w-[200px] h-[200px] object-cover rounded-xl shadow-lg"
            />
          </div>
          <div className="flex flex-col justify-between lg:w-2/3 text-center lg:text-left">
            <h1 className="text-3xl font-bold leading-snug">
              {title}:{shortDescription}
            </h1>
            <p className="py-2 text-[#627382]">
              Developed by{" "}
              <span className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold">
                {companyName}.io
              </span>
            </p>
            <div className="border-t-1 border border-gray-300 my-3"></div>

            <div className="grid grid-cols-3 gap-5 text-center lg:text-left">
              <div>
                <img
                  className="w-[25px] mx-auto lg:mx-0"
                  src={downloadImg}
                  alt=""
                />
                <p className="text-sm text-gray-600 my-1">Downloads</p>
                <p className="font-extrabold text-3xl mb-4">{downloads}</p>
              </div>
              <div>
                <img
                  className="w-[25px] mx-auto lg:mx-0"
                  src={starImg}
                  alt=""
                />
                <p className="text-sm text-gray-600 my-1">Average Ratings</p>
                <p className="font-extrabold text-3xl mb-4">{ratingAvg}</p>
              </div>
              <div>
                <img
                  className="w-[25px] mx-auto lg:mx-0"
                  src={reviewImg}
                  alt=""
                />
                <p className="text-sm text-gray-600 my-1">Total Reviews</p>
                <p className="font-extrabold text-3xl mb-4">{reviews}</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-3">
              <button className="mt-3 w-fit mx-auto lg:mx-0 btn bg-[#00D390] hover:bg-[#00b97b] text-white font-semibold px-6 py-2 rounded-lg">
                Install Now ({size} MB)
              </button>
              <a
                href="/apps"
                className="mt-3 w-fit mx-auto lg:mx-0  bg-gradient-to-br from-[#632EE3] to-[#9F62F2]  text-white font-semibold px-6 py-2 rounded-lg"
              >
                Show All Apps
              </a>
            </div>
          </div>
        </div>

        <div className="border-t-1 border border-gray-300 my-3"></div>

        <div>
          <RatingChart ratings={ratings}></RatingChart>
        </div>
        <div className="border-t-1 border border-gray-300 my-3"></div>
        <div className="p-3 ">
          <h3 className="text-xl font-semibold my-4">Description:</h3>
          <p className="text-[#627382]">{description}</p>
        </div>
      </div>
    </Container>
  );
};

export default AppDetails;