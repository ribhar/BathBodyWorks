import React from "react";
import { allCandles } from "../../../API/Data";
import AllProAt from "./AllProAt";
const CandlesAt = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "16% 80%",
        gap: "4%",
        margin: "20px",
      }}
    >
      <div className="grid" style={{ marginTop: "100px", height: "1500px" }}>
        <img
          src="https://media0.giphy.com/media/fvqVax5PXIPm4i45Zw/giphy.gif"
          alt=""
        />
        <img
          src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw10dc070e/images/Fall2021/cndl_worlds-best_fa1_0_gpt.gif?yocs=s_"
          alt=""
        />

        <img
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bath-and-body-works-square-1566838843.gif"
          alt=""
        />
        <img
          style={{ height: "250px", width: "220px" }}
          src="https://c.tenor.com/7gcvr45QNNcAAAAC/bath-and-body-works-candles.gif"
          alt=""
        />
      </div>
      <div>
        <div
          className="flex justify-between"
          style={{ margin: "5px 40px 10px 5px" }}
        >
          <p
            style={{
              fontSize: "30px",
              fontWeight: "200",
              marginBottom: "-10px",
            }}
          >
            All Candles
          </p>
          <p
            style={{
              width: "150px",
              fontWeight: "400",
            }}
          >
            <span>Total Items:</span>
            <span
              style={{ fontSize: "20px", fontWeight: "bold", margin: "10px" }}
            >
              {allCandles.length}
            </span>
          </p>
        </div>
        <hr
          style={{
            width: "100%",
            margin: "15px 0px 0px 0px",
            borderTop: "1px solid rgb(172, 172, 172)",
          }}
        />
        <select
          name=""
          id="sortAtanu"
          style={{
            width: "150px",
            fontWeight: "bold",
            outline: "none",
            margin: "30px",
            marginLeft: "82%",
            borderBottom: "2px solid black",
          }}
        >
          <option value="">Sort By</option>
          <option value="l2h">Price low to high</option>
          <option value="h2l">Price high to low</option>
        </select>
        <div>
          <AllProAt data={allCandles} />
        </div>
        <hr
          style={{
            width: "100%",
            margin: "65px 0px 50px 0px",
            borderTop: "1px solid black",
          }}
        />
        <div
          style={{
            width: "80%",
            textAlign: "left",
            lineHeight: "30px",
            marginLeft: "20px",
          }}
        >
          <p
            style={{
              fontSize: "26px",
              fontWeight: "400",
              marginTop: "30px",
            }}
          >
            About Candles from Bath & Body Works
          </p>
          <p style={{ marginTop: "20px", color: "rgb(104, 99, 99)" }}>
            Nothing’s better than walking into a room that smells amazing. From
            the World’s Best 3-Wick Candles to always-on Wallflowers and more –
            we have so many ways to fill your house (and heart) with wonderful
            fragrance.
          </p>
          <p style={{ marginTop: "30px", color: "rgb(104, 99, 99)" }}>
            Change the ambiance (and scent) of your home in an instant with a
            Bath & Body Works 3-wick candle. From relaxing days to cozy nights
            and everything in between, our candles are basically perfect for
            every occasion. (Hello, fragrant wonderland.) With up to 45 hours of
            room-filling fragrance and over 50 exclusive scents, our candles are
            clearly iconic faves. Don’t forget to pick up a single wick candle
            (or two) for every room or as the perfect housewarming.
          </p>
          <p style={{ marginTop: "30px", color: "rgb(104, 99, 99)" }}>
            Now that candles are covered, what about always-on fragrance? Enter
            our Wallflowers refills and plugs. In a few simple steps, you’ll
            have up to 30 days of effortless fragrance. One: pick a Wallflowers
            plug that matches your home décor or the seasonal vibe. Two: grab a
            few Wallflowers refills in your favorite fragrances (or try some new
            ones). Three: plug in and enjoy – it’s as easy as that.
          </p>
          <p style={{ marginTop: "30px", color: "rgb(104, 99, 99)" }}>
            P.S. Hosting a party? Having guests over on short notice? You’re
            definitely going to need our concentrated room sprays. With two
            quick bursts, the room will be instantly refreshed. Plus, with every
            kind of scent you could want (think sweet treats, fresh fruits,
            woodsy, etc.) you’ll want to grab a few for every room.
          </p>
          <p style={{ marginTop: "30px", color: "rgb(104, 99, 99)" }}>
            Have a housewarming party to go to soon? Our gifts for home page is
            the best place to start. Happy shopping!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CandlesAt;
