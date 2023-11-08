import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { authContext } from "../Provider/Provider";
import profile from "../assets/user.png";
import logo from "../assets/6284416ce5b55 (1).png";

const Navbar = () => {
  const { user, logOut } = useContext(authContext);

  const handleLogOut = () => {
    logOut().then().catch();
  };
  const links = (
    <>
      <li>
        <NavLink className="hover:text-white" to={"/"}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="hover:text-white" to={"/addjob"}>
          Add Job
        </NavLink>
      </li>
      <li>
        <NavLink className="hover:text-white" to={"/mypostedjobs"}>
          My Posted Jobs
        </NavLink>
      </li>{" "}
      <li>
        <NavLink className="hover:text-white" to={"/mybids"}>
          My Bids
        </NavLink>
      </li>
      <li>
        <NavLink className="hover:text-white" to={"/bidrequest"}>
          Bid Requests
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar max-w-7xl mx-auto bg-1 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow font-bold text-2xl bg-2 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a className="btn flex items-center justify-center btn-ghost normal-case text-xl">
          <img className="w-10" src={logo} alt="" />
          <span>Gig Junk</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal font-bold  px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <h2>{user.displayName}</h2>
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL ? user.photoURL : profile} />
              </div>
            </label>
            <a
              onClick={handleLogOut}
              className="bg-2 py-2 px-5 rounded-lg hover:bg-3 cursor-pointer"
            >
              Log out
            </a>
          </>
        ) : (
          <>
            <NavLink
              className="bg-2 py-2 px-5 rounded-lg hover:bg-3 cursor-pointer"
              to={"/login"}
            >
              Login
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
