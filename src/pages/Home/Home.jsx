import React from "react";
import MainNav from "../../components/Home/MainNav/MainNav.jsx";
import "../../pages/Home/home.css";
import Card from "../../components/Home/Card/Card.jsx";
import SideNav from "../../components/Home/SideNav/SideNav.jsx";

const Home = () => {
  return (
    <>
      <div className="d-flex">
        <SideNav />
        <div>
          <MainNav />
          <div className="d-flex flex-wrap homeMain">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
