import React, { useState, useEffect } from "react";
import { carasolImages } from "./index";

const Hero = () => {
  const [randomImage, setRandomImage] = useState(
    carasolImages[Math.floor(Math.random() * carasolImages.length)]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomImage(
        carasolImages[Math.floor(Math.random() * carasolImages.length)]
      );
    }, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        className="hero h-[800px] "
        style={{
          backgroundImage: `url(${randomImage})`,
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl font-extrabold">
              Why Choose Elite Painting ?
            </h1>
            <p className="mb-5 text-white">
              At Elite Painting, we believe that your home is your sanctuary.
              Our mission is to bring your vision to life with expert
              craftsmanship and attention to detail. Whether you're looking to
              refresh a single room or give your entire home a makeover, we are
              here to help.
            </p>
            <button className="btn btn-primary ">Get Started With Us</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
