import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();
  const [price, setPrice] = useState("");
  const [rooms, setRooms] = useState("");
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
    paint_color: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mtyoddi",
        "template_q5dknmf",
        form.current,
        "Oi126Og6B3-wkNh4O"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          resetForm();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const handleBudgetChange = (e) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value) && value >= 0) {
      setPrice(value);
    } else {
      setPrice("");
    }
  };

  const handleRoomsChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 0) {
      setRooms(value);
    } else {
      setRooms("");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const resetForm = () => {
    setFormData({
      user_name: "",
      user_email: "",
      message: "",
      paint_color: "",
    });
    setPrice("");
    setRooms("");
    form.current.reset();
  };

  return (
    <div className="relative min-h-screen flex">
      {/* Left Side with Background Image */}
      <div
        className="w-1/2 bg-cover bg-center hidden md:block"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      ></div>

      {/* Right Side Form */}
      <div className="w-full md:w-1/2 bg-white bg-opacity-90 shadow-2xl rounded-lg p-8 flex items-center justify-center">
        <div className="w-full max-w-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-4">
            We'd love to hear from you! Whether you have a question about
            features, trials, pricing, need a demo, or anything else, our team
            is ready to answer all your questions.
          </p>
          <p className="text-gray-700 mb-4">
            You can reach us via the form below, or by using the contact details
            provided.
          </p>
          <div className="text-gray-700 mb-8">
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
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label className="block text-gray-800 font-semibold">Name</label>
              <input
                type="text"
                name="user_name"
                value={formData.user_name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-800 font-semibold">Email</label>
              <input
                type="email"
                name="user_email"
                value={formData.user_email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label className="block text-gray-800 font-semibold">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="5"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <div>
              <label className="block text-gray-800 font-semibold">
                Number of Rooms for Wall Paint
              </label>
              <select
                name="num_rooms"
                value={rooms}
                onChange={handleRoomsChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select number of rooms</option>
                {[...Array(20)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-800 font-semibold">
                Preferred Paint Color
              </label>
              <input
                type="text"
                name="paint_color"
                value={formData.paint_color}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Preferred Color"
              />
            </div>
            <div>
              <label className="block text-gray-800 font-semibold">
                Budget in AUD
              </label>
              <input
                type="number"
                name="budget"
                value={price}
                onChange={handleBudgetChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Price in AUD"
                min="0"
              />
            </div>
            <div>
              <input
                type="submit"
                value="Send"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
