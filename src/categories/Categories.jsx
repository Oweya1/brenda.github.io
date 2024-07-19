import React from "react";
import { useInView } from "react-intersection-observer";
import "./categories.css";
import Category1 from "../assets/category-1.svg";
import Category2 from "../assets/category-2.svg";
import Category3 from "../assets/category-3.svg";
import Category4 from "../assets/category-4.svg";
import Category1pic from "../assets/AI.jpg";
import Category2pic from "../assets/DataSci.jpg";
import Category3pic from "../assets/AugmentedReality.jpg";
import Category4pic from "../assets/ComputerVision.jpg";

const Categories = () => {
   const { ref, inView } = useInView({
     threshold: 0.1, 
     triggerOnce: true, 
   });
  return (
    <section
      ref={ref}
      className={`section category items-center mb-8 transition-opacity duration-1000 ${
        inView ? "opacity-100" : "opacity-0"
      }`}
      aria-label="category"
    >
      <div className="container flex flex-col items-center mt-12 ">
        <p className="text-x1 font-bold text-gray-800">Categories</p>

        <h2 className="text-3xl font-bold text-#272044-600 text-center mt-4">
          Online <span className="text-yellow-500">Some of our Fourth</span>{" "}
          Industrial Revolution technologies
        </h2>

        {/* <p className="text-gray-600 text-center mt-4">
          Consectetur adipiscing elit sed do eiusmod tempor.
        </p> */}

        <ul className="grid-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 p-4 justify-items-center">
          <li>
            <div
              className="category-card bg-[#E8F7F5] transform transition-transform duration-300 ease-in-out hover:scale-105 text-white"
              style={{
                "--color": "170, 75%, 41%",
                backgroundImage: `url(${Category1pic})`,
                backgroundSize: "cover",
                opacity: 0.9,
              }}
            >
              <div className="card-icon">
                <img
                  src={Category1}
                  width="40"
                  height="40"
                  loading="lazy"
                  alt="Online Degree Programs"
                  className="img"
                />
              </div>

              <h3 className="h3">
                <a href="#" className="card-title">
                  Artificial Intelligence
                </a>
              </h3>

              <p className="card-text">
                Master AI: Fundamentals to Advanced Techniques in 10
                Comprehensive Modules.
              </p>

              <span className="card-badge">7 Courses</span>
            </div>
          </li>

          <li>
            <div
              className="category-card bg-[#FDECEF] transform transition-transform duration-300 ease-in-out hover:scale-105 text-white"
              style={{
                "--color": "351, 83%, 61%",
                backgroundImage: `url(${Category2pic})`,
                backgroundSize: "cover",
              }}
            >
              <div className="card-icon">
                <img
                  src={Category2}
                  width="40"
                  height="40"
                  loading="lazy"
                  alt="Non-Degree Programs"
                  className="img"
                />
              </div>

              <h3 className="h3">
                <a href="#" className="card-title">
                  Data Science
                </a>
              </h3>

              <p className="card-text">
                Master DS: Learn data analysis, visualization, and machine
                learning for impactful insights..
              </p>

              <span className="card-badge">4 Courses</span>
            </div>
          </li>

          <li>
            <div
              className="category-card bg-[#E8F7F5] transform transition-transform duration-300 ease-in-out hover:scale-105 text-white"
              style={{
                "--color": "229, 75%, 58%",
                backgroundImage: `url(${Category3pic})`,
                backgroundSize: "cover",
                opacity: 0.9,
              }}
            >
              <div className="card-icon">
                <img
                  src={Category3}
                  width="40"
                  height="40"
                  loading="lazy"
                  alt="Off-Campus Programs"
                  className="img"
                />
              </div>

              <h3 className="h3">
                <a href="#" className="card-title">
                  Augmented Reality
                </a>
              </h3>

              <p className="card-text">
                Master AR: Create immersive experiences blending digital with
                real-world.
              </p>

              <span className="card-badge">8 Courses</span>
            </div>
          </li>

          <li>
            <div
              className="category-card bg-[#FDECEF] transform transition-transform duration-300 ease-in-out hover:scale-105 text-white"
              style={{
                "--color": "42, 94%, 55%",

                backgroundImage: `url(${Category4pic})`,
                backgroundSize: "cover",
                opacity: 0.9,
              }}
            >
              <div className="card-icon">
                <img
                  src={Category4}
                  width="40"
                  height="40"
                  loading="lazy"
                  alt="Hybrid Distance Programs"
                  className="img"
                />
              </div>

              <h3 className="h3 ">
                <a href="#" className="card-title ">
                  Computer Vision
                </a>
              </h3>

              <p className="card-text ">
                Learn object detection, image classification, and neural
                networks in computer vision
              </p>

              <span className="card-badge style">8 Courses</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Categories;