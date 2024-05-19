import React from "react";

const StarRating = ({ rating }) => {
  const stars = Array(5)
    .fill(0)
    .map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${
          index < rating ? "text-yellow-500" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.2 3.675a1 1 0 00.95.69h3.863c.969 0 1.371 1.24.588 1.81l-3.124 2.271a1 1 0 00-.364 1.118l1.2 3.675c.3.921-.755 1.688-1.538 1.118l-3.124-2.271a1 1 0 00-1.176 0l-3.124 2.271c-.782.57-1.837-.197-1.538-1.118l1.2-3.675a1 1 0 00-.364-1.118L2.648 9.102c-.783-.57-.38-1.81.588-1.81h3.863a1 1 0 00.95-.69l1.2-3.675z" />
      </svg>
    ));
  return <div className="flex mb-4">{stars}</div>;
};

const Testimonial = ({ name, content, image, rating }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 m-4 flex flex-col items-center">
      <img
        className="w-24 h-24 rounded-full mb-4"
        src={image}
        alt={`${name}'s picture`}
      />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <StarRating rating={rating} />
      <p className="text-gray-600 text-center">{content}</p>
    </div>
  );
};

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "John Doe",
      content: "This product is amazing! It changed my life.",
      image: "https://via.placeholder.com/150",
      rating: 5,
    },
    {
      name: "Jane Smith",
      content: "Excellent service and fantastic results!",
      image: "https://via.placeholder.com/150",
      rating: 4,
    },
    {
      name: "Sam Wilson",
      content: "I would highly recommend this to everyone.",
      image: "https://via.placeholder.com/150",
      rating: 5,
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
        <div className="flex flex-wrap justify-center">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              content={testimonial.content}
              image={testimonial.image}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
