import React from "react";
import paintingImage from "../images/interior/img14.avif";

const WhyChooseUs = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="lg:col-span-1">
            <img
              src={paintingImage}
              alt="Painting Service"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:col-span-1 mt-10 lg:mt-0">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Best Painting Services
            </h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Why Elite Painting ?
            </h3>
            <p className="mt-4 text-xl text-gray-500">
              Choose Prime Painting for unparalleled professionalism and a
              seamless painting experience in Phoenix. We’re not just painters;
              we’re artisans committed to delivering perfection.
            </p>
            <div className="mt-8 space-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <span className="text-lg">🎨</span>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    Expertise At Its Finest
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Every team member undergoes rigorous training, making us the
                  home of the most seasoned painters in Phoenix.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <span className="text-lg">🏅</span>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    Premium Quality Assured
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  We utilize top-grade paints, materials, and equipment, backed
                  by a nine-year labor and material warranty, underscoring our
                  commitment to excellence.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <span className="text-lg">🔒</span>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    Convenience & Confidence
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Fully licensed and insured, we provide competitive pricing,
                  flexible payment options, and the peace of mind that you’re
                  working with the best in Arizona.
                </dd>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
