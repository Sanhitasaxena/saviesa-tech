import React from "react";
import logo from "../../../assets/icons/logo.png";
import "../../../components/Home/SideNav/sideNav.css";
import listItem1 from "../../../assets/icons/listItem1.png";
import listItem2 from "../../../assets/icons/listItem2.png";
import listItem3 from "../../../assets/icons/listitem3.png";
import listItem4 from "../../../assets/icons/listItem4.png";
import listItem5 from "../../../assets/icons/listItem5.png";
import listItem6 from "../../../assets/icons/listItem6.png";
import listItem7 from "../../../assets/icons/listitem7.png";
import listItem8 from "../../../assets/icons/listItem8.png";
import listItem9 from "../../../assets/icons/listItem9.png";
import listItem10 from "../../../assets/icons/listItem10.png";
import listItem11 from "../../../assets/icons/listitem11.png";
// import { LISTDATA } from '../../../assets/ListData'

const SideNav = () => {
  return (
    <>
      <div className="nav">
        <img src={logo} height="88px" width="100px" className="logo" />
        <ul className="ul">
          <li className="li">
            <img src={listItem1} height="40px" width="40px" />
          </li>
          <li className="li">
            <img src={listItem2} height="40px" width="40px" />
          </li>
          <li className="li">
            <img src={listItem3} height="40px" width="40px" />
          </li>
          <li className="li">
            <img src={listItem4} height="40px" width="40px" />
          </li>
          <li className="li">
            <img src={listItem5} height="40px" width="40px" />
          </li>
          <li className="li">
            <img src={listItem6} height="40px" width="40px" />
          </li>
          <li className="li">
            <img src={listItem7} height="40px" width="40px" />
          </li>
          <li className="li">
            <img src={listItem8} height="40px" width="40px" />
          </li>
          <li className="li">
            <img src={listItem9} height="40px" width="40px" />
          </li>
          <li className="li">
            <img src={listItem10} height="40px" width="40px" />
          </li>
          <li className="li">
            <img src={listItem11} height="40px" width="40px" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideNav;
