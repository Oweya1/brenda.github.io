import React, { useState } from 'react';
import AboutImage from '../../assets/Augmented.jpg';
import NewImage from '../../assets/AugmentedReality.jpg'; // Import your new image
import Image from '../../assets/Revolutionary.jpeg'
import './About.css';

const About = () => {
  const [activeTab, setActiveTab] = useState('tab-content-1');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      {/* Page Header */}
      <div className="page-header bg-[#222831] text-white py-5" style={{ height: '150px', backgroundImage: `url(${Image})` }}>
        <div className="container mx-auto flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl font-bold text-center text-[white]"><u>About Brenda Engineering</u></h1>
          <p className="text-1g text-center font-bold text-[white]">Explore our mission, vision, and more.</p>
        </div>
      </div>

      {/* About Content */}
      <div className="about bg-white py-10">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <div className="section-header ml-4">
                <h2 className="text-4xl font-bold text-blue-600">Our Company</h2>
                <p className="text-[black] text-3xl font-bold mb-6">Brenda Engineering: Top Talent Acquisition Pipeline and Student Community in Africa.</p>
                <h2 className="text-4xl font-bold text-blue-600 mb-3">About</h2>
                <p className="text-[black] mb-6"> Brenda Engineering is a transformative one-year project, with a goal of establishing a community of 10,000 passionate engineering students in Africa, particularly in Kenya, focusing on emerging Fourth Industrial Revolution (4IR) technologies. The project team has developed a sustainable, long-term training strategy that focuses on building the practical skills needed in the IT sector. The training, hackathons and Makerthons are industry-led and open to Kenyan universities and TVET students.</p>
              </div>
            </div>
            <div className="lg:w-1/2 lg:ml-10">
              <img
                src={AboutImage}
                alt="About Football Academy"
                className="about-img h-64 lg:h-auto object-cover object-center ml-16 rounded-md 200 "
              />

              <div className="about-img h-64 lg:h-auto object-cover object-center ml-16 rounded-md" style={{ backgroundImage: `url(${AboutImage})` }} />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center mt-8">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <img
                src={NewImage}
                alt="About Football Academy"
                className="about-img h-64 lg:h-auto object-cover object-center ml-16 rounded-md 200 "
              />
            </div>
            <div className="lg:w-1/2 lg:ml-10">
              <div className="section-header ml-4">
                <h2 className="text-3xl font-bold text-gray-800">Vision and Mission</h2>
                <div className="about-tab">
                  <ul className="nav nav-pills nav-justified mb-3">

                    <li className="nav-item">
                      <a
                        className={`nav-link ${activeTab === 'tab-content-2' ? 'active' : ''}`}
                        onClick={() => handleTabClick('tab-content-2')}
                      >
                        Mission
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className={`nav-link ${activeTab === 'tab-content-3' ? 'active' : ''}`}
                        onClick={() => handleTabClick('tab-content-3')}
                      >
                        Vision
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div
                      id="tab-content-2"
                      className={`container tab-pane ${activeTab === 'tab-content-2' ? 'active' : 'fade'}`}
                    >
                      Establishing a community of over 10,000 passionate engineering students in Africa, particularly in Kenya, focusing on emerging Fourth Industrial Revolution (4IR) technologies.
                    </div>
                    <div
                      id="tab-content-3"
                      className={`container tab-pane ${activeTab === 'tab-content-3' ? 'active' : 'fade'}`}
                    >
                      Evolutionize Engineering advocates for the pivotal role of emerging technologies in Africa's future, recognizing the continent's critical juncture in navigating the Fourth Industrial Revolution.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;