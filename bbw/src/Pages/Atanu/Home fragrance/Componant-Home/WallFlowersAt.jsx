import React from "react";
import { wallFlowers } from "../../API/Data";
import AllProAt from "./AllProAt";
import NavBar from "../../../../Components/NavBar";

const WallFlowersAt = () => {
  return (
    <>
      <NavBar />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "16% 80%",
          gap: "4%",
          margin: "20px",
        }}
      >
        <div className="grid" style={{ marginTop: "100px", height: "1700px" }}>
          <img
            src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw1c6f77d5/images/Spring2022/xcat_bopis-cutoff_sp1_gpt.gif?yocs=s_"
            alt=""
          />
          <img
            src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwded3a953/images/Spring2022/diff_new-wfbulb-sc_0_sp1_gpt.gif?yocs=s_"
            alt=""
          />
          <img
            src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw84bac567/images/Summer2021/diff_scent-control_sum3_0_gpt.gif?yocs=s_"
            alt=""
          />
          <img
            src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw1c6f77d5/images/Spring2022/xcat_bopis-cutoff_sp1_gpt.gif?yocs=s_"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwc6f06e7d/images/Spring2021/diff_olfactive-plugs_SP1_0_gh_ref.jpg?yocs=s_"
            alt=""
          />
          <hr
            style={{
              width: "100%",
              margin: "15px 0px 50px 0px",
              borderTop: "1px solid rgb(172, 172, 172)",
            }}
          />
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
              5/$25 Wallflowers Fragrance Refills
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
                {wallFlowers.length}
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
            <AllProAt data={wallFlowers} />
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
              Wallflowers from Bath & Body Works
            </p>
            <p style={{ marginTop: "20px", color: "rgb(104, 99, 99)" }}>
              How do you fill your home with incredible, always-on fragrance?
              Plug in a Bath & Body Works Wallflowers air freshener, of course!
              And with so many different fragrances, you’ll never get bored with
              the options. Keep reading for our advice on picking out the best
              plugs and scents for your home.
            </p>
            <p style={{ marginTop: "30px", color: "rgb(104, 99, 99)" }}>
              <span style={{ fontWeight: "bold" }}>First step: </span>pick a
              Wallflowers fragrance refill. From fresh to floral, woodsy to
              fruity, there’s a scented plug-in for every mood and occasion.
              Escape to the beach with a sunny ocean scent. Welcome the holidays
              anytime with a Christmas Wallflowers fragrance. You could even
              collect your go-to essentials throughout the year and switch up
              the scents anytime you want. Keep an eye out for our new Enhanced
              Fragrance refills — your favorites are better than ever.
            </p>
            <p style={{ marginTop: "30px", color: "rgb(104, 99, 99)" }}>
              Bonus: thanks to our blend of scented essential oils, our
              Wallflowers can even help eliminate unwanted odor. (We all love
              our pets, but sometimes we have to say bye to that lingering
              smell...)
            </p>
            <p style={{ marginTop: "30px", color: "rgb(104, 99, 99)" }}>
              <span style={{ fontWeight: "bold" }}>Second step: </span>find your
              Wallflowers plug — our version of a diffuser. Pick one that
              matches your décor, fits the season or completely stands out from
              the rest of your home. Not only are these fragrance plugs gorgeous
              to look at, some even have a built-in night light (perfect for
              midnight snack runs).
            </p>
            <p style={{ marginTop: "30px", color: "rgb(104, 99, 99)" }}>
              And if you’re wondering if our plugs will have enough power to
              fill a huge room (or if they’ll be too strong for your smaller
              rooms…a.k.a. bathrooms), we’ve got a solution you’ll love:
              Wallflowers Scent Control™ Plugs. Just plug it in and choose from
              three intensity levels (low, medium and high) to fit whichever
              room it’s in. Learn more with our Essential Guide to Wallflowers
              Air Fresheners.
            </p>
            <p style={{ marginTop: "30px", color: "rgb(104, 99, 99)" }}>
              <span style={{ fontWeight: "bold" }}>
                Third (and final) step:{" "}
              </span>
              put the plug in an outlet and breathe! It’s that easy. Now every
              time you walk in the room, you’re greeted with always-on
              fragrance. Hello, happiness.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WallFlowersAt;
