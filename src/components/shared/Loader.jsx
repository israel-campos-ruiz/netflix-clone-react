import React from "react";
import "../../styles/shared/Loader.css";
const Loader = () => (
  <div className="lds-dual-ring">
    <img
      style={{width:"80px", objectFit:"contain"}}
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/245px-Netflix_2015_logo.svg.png"
      alt="netflix logo"
    />
    <p style={{ color: "#E50914" }}></p>
  </div>
);
export default Loader;
