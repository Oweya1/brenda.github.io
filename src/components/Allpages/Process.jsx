import React from "react";
import about from "../../assets/datascience.jpg";

const Process = () => {
  return (
    <div className="section mt-24" id="about">
      <div className="mx-auto max-w-screen-xl ">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-full md:order-2 mb-4 md:mb-0">
            <div className="border-[2px] border-solid w-full md:w-[500px] border-Teal rounded-lg md:ml-4">
              <img
                src={about}
                alt=""
                className="p-4 w-full max-h-40 md:max-h-full object-contain"
              />
            </div>
          </div>
          <div className="md:w-full text-center md:text-left md:order-1 md:ml-0">
            <div className="font-bold text-lg md:text-2xl mb-4 md:mb-0">
              We provide the <br /> best{" "}
              <span className="text-Teal">online training</span>
            </div>
            <p className="text-md text-gray leading-7 mb-4 py-4 ">
              To address this skills shortage and fortify the local IT sector, my
              project seeks collaboration with the Frontiers community of
              experts. The initiative aims to establish and execute a program
              called "Brenda Engineering" enabling Technical and
              Vocational Education and Training (TVET) as well as university
              students in Kenya to acquire expertise in 4IR technologies through
              a series of hackathons and makerthons.
            </p>
            <button className="py-3 px-6 text-sm border border-solid border-gray text-white rounded-lg font-bold">
              Know More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
