// ContactUs.js
import React from "react";

const ContactUs = () => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-gray-200 text-6xl md:text-8xl lg:text-9xl font-bold opacity-10">
          Elite Painting
        </h1>
      </div>

      <div className="relative bg-white bg-opacity-90 shadow-2xl rounded-lg p-8 md:flex md:flex-row w-full max-w-4xl mx-4">
        {/* Left Side Content */}
        <div className="md:w-1/2 p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-4">
            We'd love to hear from you! Whether you have a question about
            features, trials, pricing, need a demo, or anything else, our team
            is ready to answer all your questions.
          </p>
          <p className="text-gray-700 mb-4">
            You can reach us via the form on the right, or by using the contact
            details below:
          </p>
          <div className="text-gray-700">
            <p>
              Email:{" "}
              <a
                href="mailto:support@example.com"
                className="text-blue-600 hover:underline"
              >
                support@example.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a
                href="tel:+1234567890"
                className="text-blue-600 hover:underline"
              >
                +1 234 567 890
              </a>
            </p>
            <p>Address: 1234 Example Street, City, Country</p>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="md:w-1/2 p-6">
          <form className="space-y-6">
            <div>
              <label className="block text-gray-800 font-semibold">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-800 font-semibold">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-gray-800 font-semibold">
                Message
              </label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="5"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
