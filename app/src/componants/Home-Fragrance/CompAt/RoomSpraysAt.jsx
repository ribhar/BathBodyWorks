import React from "react";
import { roomSprays } from "../../../API/Data";
import AllProAt from "./AllProAt";

const RoomSpraysAt = () => {
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
          <AllProAt data={roomSprays} />
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
            About Room Air Freshener Sprays from Bath & Body Works
          </p>
          <p style={{ marginTop: "20px", color: "rgb(104, 99, 99)" }}>
            Want effortless home fragrance? With two quick bursts from our
            concentrated room sprays, you can have it! Whether you’ve got guests
            on the way or you just need to freshen up the place, you’ll be glad
            you have them on hand.
          </p>
          <p style={{ marginTop: "30px", color: "rgb(104, 99, 99)" }}>
            Kitchens, bathrooms, guest rooms and basically every other room in
            the house – keep them within reach for a fast refresh. Plus, there’s
            every fragrance you’d ever want: wintery pines, fresh florals,
            tropical treats or autumn spices. And with that, you’re done –
            room-filling, refreshing fragrance is two quick spritzes away.
          </p>
          <p style={{ marginTop: "30px", color: "rgb(104, 99, 99)" }}>
          So, we’ve made room freshener sprays for every room in the house, but what about your dreams? Wait, what? Yes, pillow mists! They’re totally a thing and we absolutely love them. Just spritz over your pillowcase or your bedsheets and our Aromatherapy essential oil pillow mists will help you unwind and drift off into a peaceful sleep.
          </p>
          <p style={{ marginTop: "30px", color: "rgb(104, 99, 99)" }}>
          Looking for more ways to keep your scent game at its peak? All things home fragrance are a few clicks away.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default RoomSpraysAt;
