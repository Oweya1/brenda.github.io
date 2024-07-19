import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img from "../../assets/AI.jpg";

const Testimonials = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };

  return (
    <section className="py-8 md:py-16 bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row  lg:ml-40 items-center justify-center">
        <div className="md:w-full md:max-w-md mb-4 md:mb-0 mx-auto">
          <img src={img} alt="Testimonial" className="w-full" />
        </div>

        <div className="md:w-full md:pl-8 text-center md:text-left">
          <h2 className="mb-4 text-xl md:text-3xl font-bold">
            Our Students Voice
          </h2>
          <Slider {...settings} className="max-w-md mx-auto md:mx-0">
            <div className="mb-6">
              <h6 className="mb-2 text-lg md:text-xl font-bold">
                Excellent course of materials
              </h6>
              <p className="text-md md:text-base sm:text-sm">
              I really enjoyed the class and felt the challenge.  It built confidence.  I look 
              forward to taking another class in the future.  Thanks for this wonderful on-line opportunity. 
              </p>
              <div className="mt-3">
                <h6 className="font-bold text-sm md:text-base">John Maina</h6>
                <p className="text-xs md:text-sm">Nairobi</p>
              </div>
            </div>
            <div className="mb-6">
              <h6 className="mb-2 text-lg md:text-xl font-bold">
                Excellent course of materials
              </h6>
              <p className="text-md md:text-base sm:text-sm">
              I really enjoyed the class and felt the challenge.  It built confidence.  I look 
              forward to taking another class in the future.  Thanks for this wonderful on-line opportunity. 
              </p>
              <div className="mt-3">
                <h6 className="font-bold text-sm md:text-base">Martha Atieno</h6>
                <p className="text-xs md:text-sm">Nairobi</p>
              </div>
            </div>
            <div className="mb-6">
              <h6 className="mb-2 text-lg md:text-xl font-bold">
                Excellent course of materials
              </h6>
              <p className="text-md md:text-base sm:text-sm">
              I really enjoyed the class and felt the challenge.  It built confidence.  I look 
              forward to taking another class in the future.  Thanks for this wonderful on-line opportunity. 
              </p>
              <div className="mt-3">
                <h6 className="font-bold text-sm md:text-base">Halima Hassan</h6>
                <p className="text-xs md:text-sm">Kasarani, Nairobi</p>
              </div>
            </div>
            {/* Repeat similar structure for other testimonials */}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
