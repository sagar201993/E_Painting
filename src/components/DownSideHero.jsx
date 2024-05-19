import React from "react";

const DownSideHero = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-vector/happiness-concept-illustration_114360-8993.jpg?w=1380&t=st=1716057855~exp=1716058455~hmac=249505f95cf30b84a60cd4fa91ef89b459e04797fb37b347fe522eb1ab4e7bec)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              At Elite Painting, we believe that a fresh coat of paint can do
              wonders for your space and your spirit. Our mission is to bring
              color and joy into your home or business, creating environments
              that inspire happiness and well-being.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default DownSideHero;
