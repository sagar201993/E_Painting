// ./src/components/CabinetPainting.js
import React from "react";

const CabinetPainting = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          Cabinet Painting Services
        </h1>
        <p className="text-gray-600 mb-6">
          At Painter House, we offer expert cabinet painting services to give
          your kitchen, bathroom, or any other room with cabinets a fresh, new
          look. Our skilled professionals use high-quality paints and techniques
          to ensure a durable and beautiful finish.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Kitchen Cabinets"
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="text-xl font-semibold mt-2">Kitchen Cabinets</h2>
            <p className="text-gray-600 mt-1">
              Transform your kitchen with freshly painted cabinets.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Bathroom Cabinets"
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="text-xl font-semibold mt-2">Bathroom Cabinets</h2>
            <p className="text-gray-600 mt-1">
              Give your bathroom a modern look with updated cabinets.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Custom Cabinets"
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="text-xl font-semibold mt-2">Custom Cabinets</h2>
            <p className="text-gray-600 mt-1">
              Enhance any room with custom-painted cabinets.
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
            <li>Preparation and Priming</li>
            <li>Detailed and Precise Painting</li>
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
              "Painter House did a fantastic job on our kitchen cabinets. They
              look brand new and have completely transformed the space!"
            </p>
            <p className="text-gray-600 mt-2 text-right">- Jessica M.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded">
            <p className="text-gray-800 italic">
              "The team was professional and detail-oriented. Our bathroom
              cabinets have never looked better."
            </p>
            <p className="text-gray-600 mt-2 text-right">- Mark S.</p>
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

export default CabinetPainting;
