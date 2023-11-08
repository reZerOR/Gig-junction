import {
  PiChartLineUpBold,
  PiDesktopTowerBold,
  PiFigmaLogoBold,
} from "react-icons/pi";

const Extrasection = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="font-bold mt-20 mb-6 text-center lg:text-left text-4xl text-white">
        You Need It, We{"'"}ve Got It
      </h2>
      <div className="grid grid-cols-1 bg-2 py-10 rounded-lg justify-items-center md:grid-cols-3">
        <div className="flex flex-col justify-center items-center">
          <PiDesktopTowerBold className="text-7xl"></PiDesktopTowerBold>
          <p className="text-xl mt-3">Wev Development</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <PiFigmaLogoBold className="text-7xl"></PiFigmaLogoBold>
          <p className="text-xl mt-3">Grapics Design</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <PiChartLineUpBold className="text-7xl"></PiChartLineUpBold>
          <p className="text-xl mt-3">Digital Marketing</p>
        </div>
      </div>
    </div>
  );
};

export default Extrasection;
