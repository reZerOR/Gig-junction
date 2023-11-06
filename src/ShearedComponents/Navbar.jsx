import { NavLink } from "react-router-dom";

const Navbar = () => {
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
        <NavLink className="hover:text-white" to={"/mybids"}>
          My Bids
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
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal font-bold  px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="bg-2 py-2 px-5 rounded-lg hover:bg-3 cursor-pointer">
          <NavLink to={"/login"}> Login</NavLink>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
