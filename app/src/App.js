import Footer from "./componants/footer/Footer";
import CandlesAt from "./componants/Home-Fragrance/CompAt/CandlesAt";

import HomeFragrance from "./componants/Home-Fragrance/HomeFragrance";
import WallFlowersAt from "./componants/Home-Fragrance/CompAt/WallFlowersAt";
import RoomSpraysAt from "./componants/Home-Fragrance/CompAt/RoomSpraysAt";
import CarFragAt from "./componants/Home-Fragrance/CompAt/CarFragAt";

import { Routes, Route } from "react-router-dom";

import NAV from "./componants/xyz/NAV";
import Home from "./componants/xyz/Page/Home";

import NewHoFragAt from "./componants/Home-Fragrance/CompAt/NewHoFragAt";
import F_Q from "./componants/About&F&Q/F_Q";
import TopOffer from "./componants/TopOffers/TopOffer";
import About from "./componants/About&F&Q/About";

function App() {
  return (
    <div className="App">
      <NAV />
      {/* <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
        <Route path="/fragrance" element={<HomeFragrance />}/>
        <Route path="/candlesAt" element={<CandlesAt />}/>
        <Route path="/wallFlowersAt" element={<WallFlowersAt/>}/>
        <Route path="/roomSpraysAt" element={<RoomSpraysAt/>}/>
        <Route path="/carFragAt" element={<CarFragAt/>}/>
        <Route path="/newHoFragAt" element={<NewHoFragAt/>}/>
      </Routes>

      <F_Q/>
      <TopOffer /> */}
      
      <About/>
      <Footer />
    </div>
  );
}

export default App;
