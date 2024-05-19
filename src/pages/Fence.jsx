// ./src/components/FencePainting.js
import React from "react";

const FencePainting = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          Fence Painting Services
        </h1>
        <p className="text-gray-600 mb-6">
          At Painter House, we offer professional fence painting services to
          protect and beautify your fences. Our experienced team uses
          high-quality paints and techniques to ensure a long-lasting and
          attractive finish.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Wooden Fence"
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="text-xl font-semibold mt-2">Wooden Fence</h2>
            <p className="text-gray-600 mt-1">
              Enhance the look of your wooden fence with a fresh coat of paint.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Metal Fence"
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="text-xl font-semibold mt-2">Metal Fence</h2>
            <p className="text-gray-600 mt-1">
              Protect your metal fence from the elements with durable paint.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Custom Fence"
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="text-xl font-semibold mt-2">Custom Fence</h2>
            <p className="text-gray-600 mt-1">
              Add a personal touch to your custom fence with our painting
              services.
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
            <li>Painting and Finishing</li>
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
              "Painter House did a fantastic job on our wooden fence. The new
              paint has given it a fresh and vibrant look!"
            </p>
            <p className="text-gray-600 mt-2 text-right">- Emily R.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded">
            <p className="text-gray-800 italic">
              "Highly recommend Painter House for fence painting. Our metal
              fence looks amazing and is well-protected."
            </p>
            <p className="text-gray-600 mt-2 text-right">- Michael T.</p>
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

export default FencePainting;
