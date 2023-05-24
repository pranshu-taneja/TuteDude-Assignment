import React from "react";
import { useNavigate } from "react-router-dom";
import "./GoBack.css";
import gobackimg from "../../assets/goback.png";

function GoBack() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="goback">
      <button className="backbtn" onClick={goBack}> <img src={gobackimg} alt="" /> go back</button>
    </div>
  );
}

export default GoBack;
