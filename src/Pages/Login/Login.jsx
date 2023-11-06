import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    // <div className="min-h-screen my-72">
    //   <form className=" card-body bg-2 rounded-xl  max-w-md mx-auto">
    //     <h2 className="text-neutral text-center text-5xl font-bold">Login</h2>
    //     <div className="form-control">
    //       <label className="label">
    //         <span className="label-text text-white">Email</span>
    //       </label>
    //       <input
    //         type="email"
    //         placeholder="email"
    //         className="input input-bordered"
    //         required
    //       />
    //     </div>
    //     <div className="form-control">
    //       <label className="label">
    //         <span className="label-text text-white">Password</span>
    //       </label>
    //       <input
    //         type="password"
    //         placeholder="password"
    //         className="input input-bordered"
    //         required
    //       />
    //       <label className="label">
    //         <a href="#" className="label-text-alt text-white link link-hover">
    //           Forgot password?
    //         </a>
    //       </label>
    //     </div>
    //     <div className="form-control mt-6">
    //       <button className="bg-3 py-3 font-bold rounded-lg hover:bg-1 hover:text-white">
    //         Login
    //       </button>
    //     </div>
    //   </form>
    //   <div className="divider bg-2 lg:divider-horizontal">OR</div>
    // </div>
    <div className="min-h-screen">
      <div className="mt-28 bg-2  shadow-xl max-w-xl mx-auto rounded-xl">
        <h2 className="text-5xl pt-10 text-white text-center font-bold">
          Please Login!
        </h2>
        <form className="card-body mx-auto rounded-xl max-w-xl">
          {/* {errors && <h2 className="text-red-600">{errors}</h2>} */}
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
          <button className="w-full my-6 py-3 text-xl rounded-lg bg-4">
            Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
