import React from "react";
import NavBar from "../Components/NavBar";
import "../CSS/WebScroll.css";

const Home = () => {
  return (
    <div>
      <NavBar />
      {/* section 1 */}
      <section>
        <h1 className="font-bold text-2xl text-center underline text-blue-900">
          THIS IS HOME PAGE SECTION
        </h1>
      </section>
      {/* section 1 end*/}
    </div>
  );
};

export default Home;
