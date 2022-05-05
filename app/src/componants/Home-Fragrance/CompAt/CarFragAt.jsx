import React from "react";
import { carFragrance } from "../../../API/Data";
import AllProAt from "./AllProAt";

const CarFragAt = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "14% 82%",
        gap: "4%",
        margin: "20px",
      }}
    >
      <div
        className="grid"
        style={{ marginTop: "100px", height: "1700px" }}
      ></div>
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
            3/$22 Room Sprays
          </p>
          <select
            name=""
            id="sortAtanu"
            style={{
              width: "150px",
              fontWeight: "bold",
              borderBottom: "2px solid black",
            }}
          >
            <option value="">Sort By</option>
            <option value="l2h">Price low to high</option>
            <option value="h2l">Price high to low</option>
          </select>
        </div>

        <hr
          style={{
            width: "100%",
            margin: "15px 0px 50px 0px",
            borderTop: "1px solid rgb(172, 172, 172)",
          }}
        />

        <div>
          <AllProAt data={carFragrance} />
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
            About Car Air Fresheners from Bath & Body Works
          </p>
          <p style={{ marginTop: "20px", color: "rgb(104, 99, 99)" }}>
            Hit the road with our exclusive scents. With our car fragrance
            refills and holders, you can take your favorite fragrances with you
            wherever you go. Turn your commute into some time at the ocean.
            Continue de-stressing post-workout on your ride home. Transform
            drives on the darkest winter days into those on sunny spring
            afternoons. Basically, you’ll be inventing reasons to spend more
            time in your car.
          </p>
          <p style={{ marginTop: "30px", color: "rgb(104, 99, 99)" }}>
            Stuck in gridlock? Have a horrible day at the office? Just breathe!
            With aromatherapy fragrances from Bath & Body Works on board, you
            can relax a little bit more every time you inhale — regardless of
            how stressful things get. What’s more, with essential oils like
            spearmint and eucalyptus, you can improve your concentration, uplift
            your body, and focus your mind while you drive.
          </p>
          <p style={{ marginTop: "30px", color: "rgb(104, 99, 99)" }}>
            Girly and glam. Chic and classic. Fun and fresh. Whatever your
            style, we’ve got the fragrance holder to match. Don’t want to
            detract from your car’s existing decor? That’s fine too! We’ve got
            designs that discreetly integrate into your vehicle’s current look.
          </p>
          <p style={{ marginTop: "30px", color: "rgb(104, 99, 99)" }}>
            But, whatever style you choose, our car freshener holders radiate
            fragrance into your ride, so you can enjoy them on-the-go. Plus,
            with built-in clips, you can attach them to your air vent to waft
            your favorite scents quickly, or on your visor or seat pocket.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarFragAt;
