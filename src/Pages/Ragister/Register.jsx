import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { authContext } from "../../Provider/Provider";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { createUser } = useContext(authContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    const name = form.get("name");
    const photo = form.get("photo");
    const specialCharRegex = /(?=.*[-#$.%&@!+=<>*])/;
    setError("");

    if (password.length < 6) {
      setError("Password should be 6 or more character long");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError("Password should have a capital letter");
      return;
    } else if (!specialCharRegex.test(password)) {
      setError("Password should have a spacial character");
      return;
    }

    createUser(email, password)
      .then((res) => {
        updateProfile(res.user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {})
          .catch();

        Swal.fire({
          title: "Success!",
          text: "user register success fully",
          icon: "success",
          confirmButtonText: "Ok",
        });
        navigate("/");

        console.log(res.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Gig Junk | Register</title>
      </Helmet>
      <div className="mt-28 bg-2  shadow-xl max-w-md mx-auto rounded-xl">
        <h2 className="text-5xl pt-10 text-white text-center font-bold">
          Please Register!
        </h2>
        <form
          onSubmit={handleRegister}
          className="card-body mx-auto rounded-xl max-w-xl"
        >
          <div className="form-control mt-6">
            <label className="label">
              <span className="label-text text-white">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">PhotoUrl</span>
            </label>
            <input
              type="text"
              placeholder="url"
              name="photo"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt text-white link link-hover">
                Forgot password?
              </a>
            </label>
            {error && <p className="text-red-600">{error}</p>}
          </div>
          <div className="form-control mt-6">
            <button className=" py-3 rounded-lg font-semibold text-xl bg-3">
              Login
            </button>
          </div>
          <h2 className="mt-4 text-white">
            All ready have an account?{" "}
            <Link to={"/login"} className="text-4 font-medium">
              Login
            </Link>
          </h2>
        </form>
      </div>
    </div>
  );
};

export default Register;
