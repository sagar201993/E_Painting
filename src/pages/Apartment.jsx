// ./src/components/ApartmentPainting.js
import React from "react";

const ApartmentPainting = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          Apartment Painting Services
        </h1>
        <p className="text-gray-600 mb-6">
          At Painter House, we specialize in providing high-quality apartment
          painting services. Whether you're looking to refresh a single room or
          give your entire apartment a makeover, our team of experienced
          professionals is here to help.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Living Room"
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="text-xl font-semibold mt-2">Living Room</h2>
            <p className="text-gray-600 mt-1">
              A vibrant and cozy living room that makes you feel at home.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Bedroom"
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="text-xl font-semibold mt-2">Bedroom</h2>
            <p className="text-gray-600 mt-1">
              A peaceful and serene bedroom to unwind and relax.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Kitchen"
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="text-xl font-semibold mt-2">Kitchen</h2>
            <p className="text-gray-600 mt-1">
              A bright and inspiring kitchen for your culinary adventures.
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
              "Painter House made our apartment look brand new. The quality of
              their work exceeded our expectations!"
            </p>
            <p className="text-gray-600 mt-2 text-right">- Maria G.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded">
            <p className="text-gray-800 italic">
              "Highly professional and detail-oriented. They transformed our
              space beautifully."
            </p>
            <p className="text-gray-600 mt-2 text-right">- Ahmed K.</p>
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

export default ApartmentPainting;
