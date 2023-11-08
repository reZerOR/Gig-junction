import { Link } from "react-router-dom";
import background from "../../assets/blob-haikei.svg";

const Error = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">404</h1>
          <h1 className="mb-5 text-5xl font-bold">Page Not Found</h1>
          <Link to={"/"}>
            <button className=" py-3 rounded-lg px-6 font-bold text-black bg-4">
              Back To Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
