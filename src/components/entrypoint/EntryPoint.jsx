import React from "react";
import SideBar from "../sidebar/SideBar";
import MainSection from "../mainsection/MainSection";
import Footer from "../footer/Footer";

const EntryPoint = () => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <SideBar />
        <MainSection />
      </div>
      <Footer/>
    </div>
  );
};
export default EntryPoint;
