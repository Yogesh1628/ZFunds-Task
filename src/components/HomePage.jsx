import React from "react";
import { useNavigate } from "react-router-dom";
import Header
 from "./Header/Header";
const HomePage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/personal-details"); 
  };

  return (
    <div style={{ height : "100vh"}}>
      <Header/>
      <div style={{display : "flex", alignItems : "center", justifyContent : "center", height : "100%", width : "100%", paddingTop : "7vh"}}>
      <button style={{backgroundColor :  "#32547C", color : "white", fontSize : "24px", fontWeight : "700px", padding : "24px 27px"}} onClick={handleNavigate}> 
        Complete KYC 
        </button>
    </div>
    </div>
  );
};

export default HomePage;
