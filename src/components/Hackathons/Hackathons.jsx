import React from 'react';
import Image1 from '../../assets/upfront.JPG';
import Logo from '../../assets/reveng design3 revolutionize.png'
import './hackathons.css';
import { Link } from 'react-router-dom';


const Hackathons = () => {
 
  return (
    <>
      {/* Page Header */}
      <div className="page-header bg-[#166691] text-white py-4" style={{ height: '200px' }}>
        <div className="container mx-auto flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl font-bold text-center">Hackathons are the news of innovation</h1>
          <p className="text-lg text-center">Fostering Innovation, Collaboration, and Problem-Solving.</p>
        </div>
      </div>

    <div className="blog">
      <div className="flex flex-col items-center ">
        <h2 className="text-3xl md:text-3xl font-bold mb-8 mt-4">Our Latest Hackathon</h2>
      </div>

      <div className="blog-card-group ">
        <div className="blog-card">
          <div className="blog-content-wrapper">
            <button className="blog-topic text-tiny">Watu Creative</button>
            <h3>
            <Link to='/HackathonInfo' className="h3"> Promoting Financial inclusion in Kenya through Artificial intelligence </Link>
            </h3>
            <p className="blog-text">
            Leveraging artificial intelligence presents significant opportunities to promote financial
             inclusion in Kenya by overcoming existing barriers and facilitating greater
              participation in the formal financial system....
            </p>
            <div className="wrapper-flex">
              <div className="wrapper">
                <a href="#" className="h4">Brenda Enginnering</a>
                <p className="text-sm">
                  <time dateTime="2022-01-17">March 9, 2024</time>
                  <ion-icon name="time-outline"></ion-icon>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Repeat the above code block for other blog cards */}
      </div>

      {/* Repeat the above code block for other blog cards */}

  

      <div className="blog-card-group">
        <div className="blog-card">
          <div className="blog-content-wrapper">
            <button className="blog-topic text-tiny">Watu Creative</button>
            <h3>
            <Link to='/HackathonInfo' className="h3"> Promoting Financial inclusion in Kenya through Artificial intelligence </Link>

            </h3>
            <p className="blog-text">
            Leveraging artificial intelligence presents significant opportunities to promote financial
             inclusion in Kenya by overcoming existing barriers and facilitating greater
              participation in the formal financial system....
            </p>
            <div className="wrapper-flex">
              <div className="wrapper">
                <a href="#" className="h4">Brenda Enginnering</a>
                <p className="text-sm">
                  <time dateTime="2022-01-17">March 9, 2024</time>
                  <ion-icon name="time-outline"></ion-icon>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Repeat the above code block for other blog cards */}
      </div>

     
    </div>
    </>
  );

};

export default Hackathons;
