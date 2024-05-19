// src/components/AboutUs.js
import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Melbourne's Highest Rated Painters
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We love painting and always aim to do our best on every project. Our
            painters focus on making our clients happy by delivering great
            results that can improve the look and value of their properties. We
            work hard to make the painting process enjoyable and stress-free for
            our clients.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Why Choose Us
          </h3>
          <p className="text-gray-600 mb-4">
            With over ten years of experience in residential and commercial
            painting, Elite Painting is your top choice for transforming your
            home with fresh paint. We've completed hundreds of painting,
            decoration, and renovation projects, gaining extensive knowledge and
            expertise in the industry.
          </p>
          <p className="text-gray-600">
            This has given us a strong understanding of our clients' unique
            needs in the city. We use high-quality products, materials, and the
            latest painting techniques to bring your home to a pristine
            condition.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
