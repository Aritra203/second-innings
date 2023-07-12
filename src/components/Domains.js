import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./styles/domains.css";

import feed from "./images/domains/demo.gif";
import food from "./images/S1.jpg";
import train from "./images/S2.jpg";
import petshop from "./images/S3.jpg";
import vet from "./images/domains/vet.png";
import med from "./images/domains/med.png";
import hospital from "./images/domains/hospital.png";




// import required modules
import { Pagination } from "swiper";

export default function Domains() {
  return (
    <>
      <div className="container domain">
        <h2 className="heading my-4">
          <div className="codebird head-txt">
          <h1 className="text-brown main-head service-head">
                <span className="text-warnin" style={{ color: "#15A6BA", fontWeight:"500" }}>
                  S
                  <span className="text-warn" style={{ color: "#EEE" }}>
                    E
                  </span>                 
                  RV
                
                <span className="text-warnin" style={{ color: "#15A6BA" }}>
                  
                  <span className="text-warn" style={{ color: "#EEE" }}>
                    I
                  </span>                 
                  C
                </span>
                <span className="text-warn" style={{ color: "#EEE" }}>
                    E
                  </span>
                  S
                  </span>
              </h1>
          </div>
        </h2>
        

        <div className="container text-center ">
          <div className="row justify-content-center">
            
            <div  className="col text-center my-auto">
              <div className=""><img src={food} alt="" className=" img-fluid rounded-circle" style={{width:"80%"}} /></div>
              <div className="fs-4 my-3"><span><a href="/gethome ">Find A Home</a></span></div>             
            </div>
            
            <div  className="col  text-center my-auto">
              <div className=""><img src={train} alt="" className=" img-fluid rounded-circle" style={{width:"80%"}} /></div>
              <div className="fs-4 my-3"><span> <a href="/adopt">Adopt Parent</a></span></div> 
            </div>

           
            
          </div>


          
          </div>
        {/* Domains */}
      </div>
    </>
  );
}
