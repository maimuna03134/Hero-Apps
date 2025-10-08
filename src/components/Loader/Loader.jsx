import React from 'react';
import logo from '../../assets/logo.png'
import './Loader.css'

const Loader = () => {
    return (
      <div className="loading-container">
            <img src={logo} alt="Loading..." className="loading-logo" />
      </div>
    );
};

export default Loader;