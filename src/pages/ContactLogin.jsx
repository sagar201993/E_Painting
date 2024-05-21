import React, { useState } from "react";
import backgroundImage from "../images/interior/img1.avif";
import SignUpUser from "../api/signUp";
import { toast } from "react-toastify";

const ContactLogin = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SignUpHandler = (e) => {
    e.preventDefault();
    SignUpUser(email, password);
    toast.success("you have successfuly Regiter with Elite Painting");
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <h1 className="text-center mt-10 text-4xl font-bold">REGISTER WITH US</h1>
      <div
        className="hero h-[600px] md:h-[700px] lg:h-[800px] bg-base-200 mt-3"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content flex flex-col lg:flex-row-reverse items-center lg:items-start w-full px-4 md:px-6 lg:px-8">
          <div className="text-center lg:text-left mx-2 md:mx-4 bg-white p-5 rounded-lg bg-opacity-90 max-w-lg w-full lg:w-auto mb-5 lg:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Register With Elite Painting
            </h1>
            <p className="py-6">
              We are always happy to help you register with us for the latest
              updates.
            </p>
          </div>

          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 bg-opacity-90">
            <form className="card-body" onSubmit={SignUpHandler}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label className="label">
                  <a href="/" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactLogin;
