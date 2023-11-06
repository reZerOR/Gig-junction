import banner from "../../../assets/stacked-peaks-haikei.png";
import sideimg from "../../../assets/sideimg.png";

const Banner = () => {
  return (
    <div
      className="bg-cover py-10 lg:py-72"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="flex flex-col">
            <h1 className="mb-5 text-5xl text-white opacity-95 text-center lg:text-left font-bold leading-[60px]">
              The Path to Your Next Job{" "}
              <span className="text-4"> Starts Here</span>
            </h1>
            <p className="max-w-md text-center mx-auto text-white lg:mx-0 lg:text-left font-medium mb-5 leading-8">
              Discover the job of your dreams with us. Whether you're a seasoned
              professional looking for your next career move or just starting
              out in your journey, we have a wide array of job listings to
              explore. Our user-friendly interface and advanced search options
              will help you find the perfect fit for your skills and
              aspirations.
            </p>
          </div>
          <div>
            <img className="w-full " src={sideimg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
