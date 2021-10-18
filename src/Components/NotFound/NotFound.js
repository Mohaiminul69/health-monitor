import React from "react";
import { Link, useHistory } from "react-router-dom";
import notFoundImg from "../../Images/404.png";
import "./notfound.css";

const NotFound = () => {
  const history = useHistory();
  const handleBack = () => {
    history.goBack();
  };
  return (
    <div className="notFoundDiv">
      <img className="notFoundIng my-4" src={notFoundImg} alt="" />
      <div>
        <Link to="/">
          <button className="btn btn-danger me-5">Home</button>
        </Link>
        <button onClick={handleBack} className="btn btn-danger">
          Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
