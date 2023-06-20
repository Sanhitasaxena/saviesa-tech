import React from "react";
import "../../Home/Card/card.css";
import cardImg from "../../../assets/img/card-bg.png";
import rectangle from "../../../assets/icons/Rectangle 5.png";
import car from "../../../assets/icons/Rectangle 3.png";
import tub from "../../../assets/icons/Rectangle 4.png";

const Card = () => {
  return (
    <>
      <div className="card main">
        <img className="card-img-top" src={cardImg} alt="Card image cap" />
        <div className="card-body d-flex justify-content-between price">
          <h6>$12500</h6>
          <p>Vacant</p>
        </div>
        <ul className="list-group-flush list">
          <li className="list-group-item">
            38 Nappan Drive opp. Gandhi Nagar, Mumbai
          </li>
        </ul>
        <div className="card-body d-flex justify-content-around icons">
          <div>
            <img src={rectangle} />
            <small>1200ft</small>
          </div>
          <div>
            <img src={car} />
            <small>3</small>
          </div>
          <div>
            <img src={tub} />
            <small>2</small>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
