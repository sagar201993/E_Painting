// ./src/components/EpoxyService.js
import React from "react";

const EpoxyService = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          Epoxy Flooring Services
        </h1>
        <p className="text-gray-600 mb-6">
          At Painter House, we offer professional epoxy flooring services that
          provide a durable, long-lasting, and aesthetically pleasing solution
          for your floors. Our skilled team uses high-quality epoxy materials
          and precise application techniques to ensure a flawless finish.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Garage Floor"
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="text-xl font-semibold mt-2">Garage Floor</h2>
            <p className="text-gray-600 mt-1">
              Transform your garage with a durable and stylish epoxy floor.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Basement Floor"
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="text-xl font-semibold mt-2">Basement Floor</h2>
            <p className="text-gray-600 mt-1">
              Enhance your basement with a sleek and easy-to-clean epoxy floor.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Commercial Space"
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="text-xl font-semibold mt-2">Commercial Space</h2>
            <p className="text-gray-600 mt-1">
              Upgrade your commercial space with a professional epoxy flooring
              solution.
            </p>
          </div>
        </div>
        <div className="mt-6">
          <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
            Contact Us for a Quote
          </button>
        </div>
      </div>

      {/* Additional Sections */}
      <div className="max-w-7xl mx-auto mt-12 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Process</h2>
        <div className="space-y-4">
          <p className="text-gray-600">
            We follow a meticulous process to ensure that every project is
            completed to the highest standards.
          </p>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Initial Consultation and Color Selection</li>
            <li>Surface Preparation and Priming</li>
            <li>Epoxy Application</li>
            <li>Final Inspection and Cleanup</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Customer Testimonials
        </h2>
        <div className="space-y-4">
          <div className="bg-gray-100 p-4 rounded">
            <p className="text-gray-800 italic">
              "Painter House did an incredible job on our garage floor. The
              epoxy coating looks amazing and is very durable!"
            </p>
            <p className="text-gray-600 mt-2 text-right">- Alice B.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded">
            <p className="text-gray-800 italic">
              "The team was professional and efficient. Our basement floor looks
              fantastic with the new epoxy finish."
            </p>
            <p className="text-gray-600 mt-2 text-right">- John P.</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Project 1"
              className="w-full h-48 object-cover rounded"
            />
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Project 2"
              className="w-full h-48 object-cover rounded"
            />
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Project 3"
              className="w-full h-48 object-cover rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EpoxyService;
