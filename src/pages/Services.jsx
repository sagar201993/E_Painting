import React from "react";
import servicesInfro from "../components/index";

const Services = () => {
  return (
    <>
      <h1 className="text-center font-extrabold text-3xl mt-5 animate-fadeIn">
        OUR SERVICES
      </h1>
      <div className="mx-auto container mt-3">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
          {servicesInfro.map((service) => (
            <div
              key={service.id}
              className="card w-96 bg-base-100 shadow-xl transform transition-transform duration-500 hover:scale-105"
            >
              <figure className="px-10 pt-10">
                <img
                  src={service.image}
                  alt="Service"
                  className="rounded-xl w-full h-48 object-cover"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">{service.text}</h2>
                <p className="text-center">{service.content}</p>
                <div className="card-actions">
                  <button className="btn btn-primary">Explore More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
