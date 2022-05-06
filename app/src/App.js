import logo from './logo.svg';
import './App.css';
import Shop_body from "./Shopbody/Shop_body"
import { Can } from './candles/Can';
import {Wall} from './wallflower/Wall'
// import {Real} from './Real'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Shop_body/> */}
      <Can/>
      {/* <Wall/> */}
      {/* <Real/> */}

    </div>
  );
}

export default App;
