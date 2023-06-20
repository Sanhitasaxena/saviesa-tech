import React from "react";
import { BiBell } from "react-icons/bi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { TfiPlus } from "react-icons/tfi";
import { BiFilterAlt } from "react-icons/bi";
import { CiSearch } from "react-icons/ci";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "../../Home/MainNav/mainNav.css";

const MainNav = () => {
  const options = ["Hari", "Vansh", "rai"];
  const defaultOption = options[0];

  return (
    <>
      <div className="d-flex justify-content-end gap-4 container-fluid">
        <BiBell className="icon" />
        <div className="d-flex g-2 dropdownDiv">
          <div className="img">.</div>
          <Dropdown
            className="dropdown"
            options={options}
            // onChange={this._onSelect}
            value={defaultOption}
            placeholder="Select an option"
          />
        </div>
      </div>
      <div className=" mt-4 container searchDiv">
        <h4 className="text">All properties</h4>
        <div className="d-flex midSearch">
          <CiSearch className="searc-icon" />
          <input placeholder="Search" className="input" />
        </div>
        <div className="d-flex g-2 btns">
          <button className="mr-3 sort">
            Sort By <MdOutlineKeyboardArrowDown />
          </button>
          <button className="mr-3 plus">
            <TfiPlus />
          </button>
          <button className="mr-3 filter">
            <BiFilterAlt />
          </button>
        </div>
      </div>
    </>
  );
};

export default MainNav;
