import React from "react";
import styles from "./TopOffer.module.css";
import { Link } from "react-router-dom";
import NavBar from "../../../Components/NavBar";
import Footer2 from "../../../Components/Footer/Footer2";

const TopOffer = () => {
  return (
    <>
      <NavBar />
      <div
        style={{
          width: "45%",
          marginLeft: "28%",
          
        }}
        className="mt-5"
      >
        <span
          style={{ fontSize: "30px", fontWeight: "bold", marginLeft: "10px" }}
        >
          TOP OFFERS
        </span>
        <span
          style={{
            fontSize: "18px",
            color: "rgb(102, 98, 98)",
            marginLeft: "20px",
          }}
        >
          Too good to pass up! Shop our best offers now.
        </span>
        <hr
          style={{
            width: "100%",
            borderTop: "1px solid black",
          }}
        />
        {/* <---:link section:---> */}
        <div
          className="grid grid-cols-2 gap-[30px]"
          style={{ marginTop: "40px", marginBottom: "40px" }}
        >
          <Link to={"/all-candles"}>
            <img
              src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw51fe9457/images/Spring2022/12953w_sp3_ss_0.jpg?yocs=o_s_"
              alt=""
            />
            <p style={{ fontWeight: "bold", textAlign: "center" }}>
              LIMITED TIME ONLY!
            </p>
            <p style={{ textAlign: "center" }}>3-Wick Candles</p>
            <p style={{ textAlign: "center" }}>
              <span style={{ fontSize: "19px" }}>$</span>
              <span style={{ fontSize: "25px" }}>12.95</span>
            </p>

            <button className={styles.topAtOffAt}>SHOP</button>
          </Link>
          <Link to={"/aromatherapy"}>
            <img
              src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw573cbc3b/images/Spring2022/obc_tbctier_sp3_ss.jpg?yocs=o_s_"
              alt=""
            />
            <p
              style={{
                marginLeft: "20px",
                marginRight: "20px",
                textAlign: "center",
                fontSize: "14px",
              }}
            >
              All Full-Size Body Care (Including Aromatherapy!)
            </p>
            <p
              style={{
                fontSize: "25px",
                textAlign: "center",
                marginBottom: "5px",
              }}
            >
              Buy 3, Get 3 FREE
            </p>
            <button className={styles.topAtOffAt}>SHOP</button>
          </Link>
          <Link to={"/all-wallflowers"}>
            <img
              src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw96126717/images/Spring2022/diff_mday_sp3_ss.jpg?yocs=o_s_"
              alt=""
            />

            <p style={{ textAlign: "center" }}>Wallflowers Fragrance Refills</p>
            <p style={{ textAlign: "center" }}>
              <span style={{ fontSize: "25px" }}>5/</span>
              <span style={{ fontSize: "19px" }}>$</span>
              <span style={{ fontSize: "25px" }}>25</span>
            </p>

            <button className={styles.topAtOffAt}>SHOP</button>
          </Link>
          <Link to={"/all-hand-soaps"}>
            <img
              src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw55bfb0b6/images/Spring2022/sp_garden-infusion_sp3_ss.jpg?yocs=o_s_"
              alt=""
            />
            <p
              style={{
                marginLeft: "20px",
                marginRight: "20px",
                textAlign: "center",
                fontSize: "14px",
              }}
            >
              Hand Soaps
            </p>
            <p style={{ textAlign: "center", marginBottom: "5px" }}>
              <span style={{ fontSize: "25px" }}>6/</span>
              <span style={{ fontSize: "19px" }}>$</span>
              <span style={{ fontSize: "25px" }}>27 o</span>
              <span style={{ fontSize: "25px" }}>r 4/</span>
              <span style={{ fontSize: "19px" }}>$</span>
              <span style={{ fontSize: "25px" }}>20</span>
            </p>
            <button className={styles.topAtOffAt}>SHOP</button>
          </Link>
          <Link to={"/all-candles"}>
            <img
              src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw36bcc92f/images/Spring2022/cndl_sw_sp3_ss.jpg?yocs=o_s_"
              alt=""
            />
            <p style={{ fontSize: "14px", textAlign: "center" }}>
              Single Wick Candles
            </p>

            <p style={{ textAlign: "center" }}>
              <span style={{ fontSize: "25px" }}>2/</span>
              <span style={{ fontSize: "19px" }}>$</span>
              <span style={{ fontSize: "25px" }}>22</span>
            </p>

            <button className={styles.topAtOffAt}>SHOP</button>
          </Link>
          <Link to={"/all-hand-soaps"}>
            <img
              src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw12b687f4/images/Spring2022/sn_pocketbac_sp3_ss.jpg?yocs=o_s_"
              alt=""
            />
            <p
              style={{
                marginLeft: "20px",
                marginRight: "20px",
                textAlign: "center",
                fontSize: "14px",
              }}
            >
              Hand Sanitizer 5-Packs
            </p>
            <p style={{ textAlign: "center" }}>
              <span style={{ fontSize: "19px" }}>$</span>
              <span style={{ fontSize: "25px" }}>8</span>
            </p>
            <button className={styles.topAtOffAt}>SHOP</button>
          </Link>
        </div>
        <hr
          style={{
            width: "100%",
            borderTop: "1px solid black",
          }}
        />
        {/* <---:End paragraph:---> */}
        <div>
          <p
            style={{
              marginTop: "30px",
              fontSize: "25px",
              fontWeight: "400",
              color: "rgb(80, 78, 78)",
            }}
          >
            About Top Offers from Bath & Body Works
          </p>
          <p
            style={{
              fontSize: "15px",
              lineHeight: "25px",
              marginTop: "20px",
              color: "rgb(160, 153, 153)",
            }}
          >
            Welcome to the one-stop-shop for all Bath & Body Works coupons. This
            is the spot to watch for the latest deals, coupon codes, hottest
            steals and the most need-right-now promotions we’ve got going on.
            From home fragrance favorites to body care loves, we definitely have
            something amazing for whatever mood (or season) you’re feeling.
          </p>
          <p
            style={{
              fontSize: "15px",
              lineHeight: "25px",
              marginTop: "20px",
              color: "rgb(160, 153, 153)",
            }}
          >
            And while you’re here, let’s talk about a few things that we’re
            totally obsessed with right now. After all, a Bath & Body Works
            promotion is the best time to try something new, right? We’re super
            excited about our new body care collections (they’re basically joy
            in a bottle), and our latest candle and Wallflowers arrivals turn
            your home into a fragrance paradise. Trust us: with Bath & Body
            Works coupons, you actually can have it all!
          </p>
          <p
            style={{
              fontSize: "15px",
              lineHeight: "25px",
              marginTop: "20px",
              color: "rgb(160, 153, 153)",
            }}
          >
            Another way we love using Bath & Body Works coupon codes? On gifts,
            of course! Check your calendar: if you have any birthdays or
            holidays on the horizon, this would be the perfect time to stock up
            on someone’s (or your) favorite fragrance. You could even score a
            few extra hand soaps or single wick candles to keep in your gift
            closet for the next celebration. (Incredible gifting strategy, go
            you!) And if you have a few common questions, let’s answer them
            here…
          </p>
          <p
            style={{
              fontSize: "15px",
              fontWeight: "bold",
              lineHeight: "25px",
              marginTop: "20px",
            }}
          >
            How do you get Bath & Body Works coupons mailed to you?
          </p>
          <p
            style={{
              fontSize: "14px",
              lineHeight: "25px",
              marginTop: "5px",
              color: "rgb(160, 153, 153)",
            }}
          >
            Just fill out our Mailing Address Update email form. Choose "Add me
            to your mailing list" as your Request Type and provide all relevant
            information. Then you should be good to go!
          </p>
          <p
            style={{
              fontSize: "15px",
              lineHeight: "25px",
              marginTop: "20px",
              fontWeight: "bold",
            }}
          >
            Does Bath & Body Works offer free shipping?
          </p>
          <p
            style={{
              fontSize: "14px",
              lineHeight: "25px",
              marginTop: "5px",
              color: "rgb(160, 153, 153)",
            }}
          >
            Sometimes! Sign up for emails to stay in the know – it’s that easy.
            Don’t forget you can also see our best deals on this page.
          </p>
          <p
            style={{
              fontSize: "15px",
              lineHeight: "25px",
              marginTop: "20px",
              fontWeight: "bold",
            }}
          >
            How many promo codes can you redeem per online order?
          </p>
          <p
            style={{
              fontSize: "14px",
              lineHeight: "25px",
              marginTop: "5px",
              color: "rgb(160, 153, 153)",
            }}
          >
            Just one! Keep in mind that a lot of offers and promotions don’t
            require a promo code, so you can still add one in that case. If more
            than one code is entered at checkout, the only code that will be
            applied is the last promo code entered.
          </p>
          <p
            style={{
              fontSize: "14px",
              lineHeight: "25px",
              marginTop: "20px",
              fontWeight: "bold",
            }}
          >
            What is the Bath & Body Works return policy?
          </p>
          <p
            style={{
              fontSize: "14px",
              lineHeight: "25px",
              marginTop: "10px",
              color: "rgb(160, 153, 153)",
            }}
          >
            We just want you to love it! Return anything, anytime for any
            reason. 100% guaranteed. Learn more about our happiness guarantee.
          </p>
          <p
            style={{
              fontSize: "14px",
              lineHeight: "25px",
              marginTop: "20px",
              marginBottom: "20px",
              color: "rgb(160, 153, 153)",
            }}
          >
            We’re always updating this page with the latest and greatest Bath &
            Body Works sales, so bookmark it now and check back often. Other
            coupon sites can wait – this is the spot to check for the best
            deals. Hint, hint: now that you’ve seen our greatest deals shop our
            newest arrivals.
          </p>
        </div>
      </div>
      <Footer2 />
    </>
  );
};

export default TopOffer;
