import React from "react";

const Card = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center h-64">
    <div className="text-6xl mb-4">{icon}</div>
    <h2 className="text-2xl font-bold mb-2">{title}</h2>
    <p className="text-gray-700">{description}</p>
  </div>
);

const HowWork = () => {
  return (
    <div className="p-4 ">
      <h1 className="text-3xl font-bold text-center mb-8">How We Work</h1>{" "}
      {/* Heading added here */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        <Card
          icon="📝"
          title="Get a Free Quote"
          description="Contact us to get a free quote for your project."
        />
        <Card
          icon="🎨"
          title="We Paint Your Home"
          description="Our professionals will paint your home with the utmost care and attention to detail."
        />
        <Card
          icon="✔️"
          title="That's It"
          description="All you need to do is sit back and relax while we take care of everything."
        />
      </div>
    </div>
  );
};

export default HowWork;
