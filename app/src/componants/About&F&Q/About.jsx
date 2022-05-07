import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <img
        src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/1b044ef6-3e56-4c5e-8b07-c60502264227.__CR0,0,970,600_PT0_SX970_V1___.jpg"
        alt=""
        style={{ width: "100%", height: "800px", marginBottom: "0px" }}
      />
      <p
        style={{
          fontSize: "40px",
          fontweight: "bold",
          textAlign: "center",
          marginTop: "-100px",
        }}
      >
        We make the world a brighter, happier place
      </p>
      <p
        style={{
          fontSize: "40px",
          fontweight: "bold",
          textAlign: "center",
          marginTop: "-10px",
        }}
      >
        through the power of fragrance.
      </p>
      <p
        style={{
          fontSize: "20px",
          textAlign: "center",
          margin: "40px 220px 20px 220px",
        }}
      >
        This idea is what we were founded on, and it’s at the heart of
        everything we do. We’re a team that cares about our customers and
        believes in giving them a reason to celebrate with fragrance every day.
      </p>
      <p style={{margin:"80px 100px 10px 100px",color: "rgb(102, 98, 98)"}}>
        We are committed to creating a diverse, equitable and inclusive culture
        that is focused on delivering exceptional fragrances and experiences.
      </p>
      <p style={{margin:"20px 100px 10px 100px",color: "rgb(102, 98, 98)"}}>
      We work hard to improve our communities and our planet in a way that will make us proud for years to come ... because we believe the world is a better place when everyone has access to the things that make them happy.
      </p>
      <p style={{margin:"20px 100px 10px 100px",color: "rgb(102, 98, 98)"}}>
      Bath & Body Works is an international company that sells personal care and beauty products in more than 1,700 North American stores and has nearly 300 stores in countries around the globe operating under franchise, license and wholesale arrangements. The company's products are also available online at <Link to="/" style={{color:"rgb(142, 183, 245)"}}>www.BathandBodyWorks.com.</Link>
      </p>
      
    </div>
  );
};

export default About;
