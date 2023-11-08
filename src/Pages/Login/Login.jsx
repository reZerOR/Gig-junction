import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../Provider/Provider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn, googleLogin } = useContext(authContext);
  const [errors, setErrors] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    setErrors("");

    signIn(email, password)
      .then((res) => {
        console.log(res.user);
        Swal.fire({
          title: "Success!",
          text: "User login success full",
          icon: "success",
          confirmButtonText: "Ok",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((errors) => {
        setErrors("Invalid email or worng password");
        console.log(errors);
      });
  };

  const handelGoogleLogin = () => {
    googleLogin()
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "Coffee added to the database",
          icon: "success",
          confirmButtonText: "Ok",
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Gig Junk | Login</title>
      </Helmet>
      <div className="mt-28 bg-2  shadow-xl max-w-md mx-auto rounded-xl">
        <h2 className="text-5xl pt-10 text-white text-center font-bold">
          Please Login!
        </h2>
        <form
          onSubmit={handleLogin}
          className="card-body mx-auto rounded-xl max-w-xl"
        >
          {errors && (
            <h2 className="text-red-600 font-bold text-center p-2 rounded-lg bg-white">
              {errors}
            </h2>
          )}
          <div className="form-control mt-6">
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
          </div>
          <div className="form-control mt-6">
            <button className=" py-3 rounded-lg font-semibold text-xl bg-3">
              Login
            </button>
          </div>
          <h2 className="mt-4 text-white">
            Dont have an account?{" "}
            <Link to={"/register"} className="text-4 font-medium">
              Register
            </Link>
          </h2>
        </form>
        <div className="text-center text-white">OR</div>
        <div className=" text-center px-8">
          <button
            onClick={handelGoogleLogin}
            className="w-full my-6 py-3 text-xl rounded-lg bg-4"
          >
            Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
