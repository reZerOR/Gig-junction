import backgruondimg from "../../../assets/blob-haikei.svg";

const NewsLetter = () => {
  return (
    <div
      className="hero max-w-7xl mx-auto h-[550px] mt-32 rounded-lg"
      style={{
        backgroundImage: `url(${backgruondimg})`,
      }}
    >
      <div className="text-center w-[400px] text-white">
        <div className="">
          <h1 className="mb-6 text-5xl font-bold">
            Subscribe to our <br />
            <span className="text-4"> Newsletter </span>
          </h1>
          <div className="flex">
            <input
              className="w-full rounded-bl-xl p-4 b"
              type="text"
              placeholder="email"
            />
            <button className="p-4 rounded-r-xl bg-4 text-black font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
