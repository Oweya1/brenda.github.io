import React from 'react';
import Image4 from '../../assets/allofthem.JPG';
import Image5 from '../../assets/between.JPG';
import Image6 from '../../assets/IMG_1429.JPG';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const PostHeader = () => {
  return (
    <section className="post-header">
      <div className="header-content post-container flex flex-col items-center">
        <Link to='/pages2' className="text-blue-500 hover:text-blue-700">Back to Home</Link>
        <h1 className="header-title text-center text-2xl mt-4 leading-10 text-black">Promoting Financial inclusion in Kenya <br/> through Artificial intelligence</h1>
        <img src={Image4} alt="" className="header-img" />
      </div>
    </section>
  );
}

const PostContent = () => {
  return (
    <section className="post-content mt-10">
      <div className="post-container">
        <h2 className="sub-heading text-2xl">Development</h2>
        <p className="post-text">Welcome to the "AI for Financial Inclusion in Kenya" hackathon, a groundbreaking event aimed at leveraging artificial intelligence to drive meaningful change in Kenya's financial landscape. This hackathon brings together a diverse community of developers, data scientists, fintech enthusiasts, and stakeholders to tackle the pressing
          challenge of financial exclusion faced by many individuals and businesses in Kenya. </p>
        <p className="post-text">With the power of AI at our fingertips, we have the opportunity to revolutionize the way financial services are accessed, delivered, and utilized, ultimately paving the way for greater economic empowerment and inclusion.</p>
        <p className="post-text">Participants in this hackathon will have the chance to delve into various themes critical to advancing financial inclusion in Kenya. Whether it's developing AI algorithms for credit scoring and risk assessment, creating chatbots and virtual assistants for financial guidance,
          or designing innovative solutions for fraud detection and prevention, there's ample room for creativity and innovation. </p>
        <img src={Image5} alt="" className="post-img" />
        <p className="post-text">Participants in this hackathon will have the chance to delve into various themes critical to advancing financial inclusion in Kenya. Whether it's developing AI algorithms for credit scoring and risk assessment, creating chatbots and virtual assistants for financial guidance,
          or designing innovative solutions for fraud detection and prevention, there's ample room for creativity and innovation. </p>
        <img src={Image4} alt="" className="post-img" />
        <p className="post-text">By harnessing alternative data sources, exploring novel technologies, and collaborating with like-minded individuals, participants will have the chance to co-create impactful solutions that address the unique needs of Kenya's underserved populations.</p>
        <p className="post-text">The hackathon's outcomes extended beyond the event itself, promising tangible steps toward greater financial inclusion in Kenya. Winning teams would received recognition and support, 
        enabling them to refine and implement their solutions with the backing of funding, mentorship, and industry connections. As these AI-driven innovations take shape, they have the potential to transform the landscape of financial services in Kenya, unlocking opportunities for individuals and communities previously marginalized by traditional banking systems. By harnessing the 
        power of AI to address the root causes of financial exclusion, the hackathon serves as a catalyst for positive change, driving forward the vision of a more inclusive and equitable financial ecosystem in Kenya and beyond. </p>
        <img src={Image6} alt="" className="post-img" />
        <p className="post-text">Join us on this transformative journey as we harness the power of AI to unlock new opportunities and empower individuals and communities across Kenya..</p>
      </div>
    </section>
  );
}

const Share = () => {
  return (
    <div className="share post mb-8">
      <span className="share-title">Share this article</span>
      <ul className="social-icons flex">
        <li className="mr-2">  <FaTwitter size={32} /></li>
        <li className="mr-2">  <FaFacebook size={32} /></li>
        <li className="mr-2">  <FaLinkedin size={32} /></li>
        <li className="mr-2">  <FaInstagram size={32} /></li>
      </ul>
    </div>
  );
}

const HackathonInfo = () => {
  return (
    <div className="category">
      <PostHeader />
      <div className="post-content-wrapper">
        <PostContent />
        <Share />
      </div>
    </div>
  );
}

export default HackathonInfo;
