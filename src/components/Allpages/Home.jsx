import React from 'react';
import hero from '../../assets/IMG_005.jpg';
import { Link } from'react-router-dom';

function Home() {
  return (
    <div className="flex justify-center items-center py-10 lg:ml-36 sm:mt-2">
      <div className="md:flex items-center">
        <div>
          <div className="sm:text-[2.5rem] text-[1.825rem] font-bold text-center">
            Brenda Engineering-<br/>  Building Practical Skills <br/>  for the IT Sector
          </div>
          <p className="text-md  text-gray max-w-sm text-center">
          Top Talent Acquisition Pipeline and Student Community in Africa.
          </p>
          <Link
              to="/pages"
              className="mt-4 px-6 py-3 font-bold text-center text-black bg-Teal rounded-lg shadow-2xl border-2 border-gray-300"
            >
              Get Started
            </Link>
          
          
        
        </div>
        <div className="md:w-[45%]  ml-8">
          <img
            src={hero}
            alt=""
            className="max-w-full h-auto rounded-md"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
