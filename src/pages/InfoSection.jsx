import React from "react";
import img13 from "../images/interior/img13.avif";

const InfoSection = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex flex-col lg:flex-row items-center lg:items-start">
        <img
          src={img13}
          className="max-w-full lg:max-w-2xl rounded-lg shadow-2xl"
          alt="Interior Design"
        />
        <div className="lg:mx-10 mt-6 lg:mt-0 text-center lg:text-left">
          <h1 className="text-5xl font-bold mb-6">Who We Are</h1>
          <p className="text-md mx-4 lg:mx-0 lg:px-4">
            At Elite Painting, we believe that your home is your sanctuary, and
            our mission is to bring your vision to life with expert
            craftsmanship and attention to detail. Whether you're looking to
            refresh a single room or give your entire home a makeover, we are
            here to help. Our team of experienced painters is dedicated to
            delivering high-quality results, paying close attention to every
            detail to ensure your complete satisfaction. We work closely with
            you to understand your vision and tailor our services to meet your
            specific requirements, using only the best paints and materials for
            a long-lasting and beautiful finish. Our services include interior
            and exterior painting, color consultation, and custom finishes, all
            designed to enhance your home's aesthetic and protect its value. We
            begin with a detailed consultation to understand your needs,
            followed by careful preparation and professional painting techniques
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
