import Footer from "./componants/footer/Footer";
import CandlesAt from "./componants/Home-Fragrance/CompAt/CandlesAt";

import HomeFragrance from "./componants/Home-Fragrance/HomeFragrance";
import WallFlowersAt from "./componants/Home-Fragrance/CompAt/WallFlowersAt";
import RoomSpraysAt from "./componants/Home-Fragrance/CompAt/RoomSpraysAt";
import CarFragAt from "./componants/Home-Fragrance/CompAt/CarFragAt";

function App() {
  return (
    <div className="App">
      <HomeFragrance />
      =====================================
      <CandlesAt />
      <WallFlowersAt/>
      <RoomSpraysAt/>
      <CarFragAt/>
      =====================================
      <Footer />
    </div>
  );
}

export default App;
