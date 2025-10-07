import React from 'react';
import logo_img from '../../assets/logo.png'
import { Link } from 'react-router';
import { BsGithub } from "react-icons/bs";


const Navbar = () => {
    const links = (
      <>
        <Link to="/">
          <li className="m-2">Home</li>
        </Link>
        <Link to="/apps">
          <li className="m-2">Apps</li>
        </Link>
        <Link to="/installation">
          <li className="m-2">Installation</li>
        </Link>
      </>
    );

    return (
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className=" text-lg flex items-center gap-2">
            <img className="w-[30px]" src={logo_img} alt="" />
            <span className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-bold ">
              HERO.IO
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <Link to="/https://github.com/maimuna03134">
            <button className="btn bg-gradient-to-br from-[#632EE3] to-[#9F62F2]   font-bold text-white">
              <span>
                <BsGithub />
              </span>
              Contribute
            </button>
          </Link>
        </div>
      </div>
    );
};

export default Navbar;