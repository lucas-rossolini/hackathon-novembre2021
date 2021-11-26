import React from "react";
import "./Home.css";
import logo from "../../assets/images/logo-big.png";

function Home() {
  return (
    <div className="homediv">
      <div></div>
      <div className="hometext">
        <p>Finally an app that let deaf people enjoy music !</p>
      </div>
      <div>
        <p className="descriptiontext">
          Developped by four wilders :<br /> Guilhem, Lucas, Yohan and Mathieu
          <br />
          are proud to present: <br />
          <img src={logo} alt="logo" />
        </p>
      </div>
    </div>
  );
}

export default Home;
