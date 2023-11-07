import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./fetured.css";
import Webtab from "./Tabs/Webtab";
import Digitaltab from "./Tabs/Digitaltab";
import Grapicstab from "./Tabs/Grapicstab";

const FeaturedJob = () => {
  return (
    <div>
      <div className="bg-white -mt-10 w-96 mx-auto text-center font-bold rounded-lg py-6">
        <h2 className="text-4xl">Featured Jobs</h2>
      </div>
      <Tabs
        className=""
        defaultIndex={0}
        onSelect={(index) => console.log(index)}
      >
        <TabList className="bg-3 text-center rounded-lg mx-auto p-2 my-6 max-w-md">
          <Tab className="tab">Web Development</Tab>
          <Tab className="tab">Digital Marketing</Tab>
          <Tab className="tab">Grapics Design</Tab>
        </TabList>

        <div className="tabpaneldiv">
          <TabPanel>
            <Webtab></Webtab>
          </TabPanel>
          <TabPanel>
            <Digitaltab></Digitaltab>
          </TabPanel>
          <TabPanel>
            <Grapicstab></Grapicstab>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default FeaturedJob;
