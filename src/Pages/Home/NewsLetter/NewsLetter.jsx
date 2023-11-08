import backgruondimg from "../../../assets/blob-haikei.svg";

const NewsLetter = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="font-bold text-center mt-32 mb-6 lg:text-left text-4xl text-white">
        Want To Recive Email For New Job?
      </h2>
      <div
        className="hero  h-[550px]  rounded-lg"
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
    </div>
  );
};

export default NewsLetter;
