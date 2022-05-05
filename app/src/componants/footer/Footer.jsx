import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerAt}>
      <hr style={{ margin: "80px 0px 35px 0px" }} />
      <div className={styles.footer_upAt}>
        <div>
          <p
            style={{
              padding: "0px 20px 15px 0px",
            }}
          >
            Get email offers & the latest news from Bath & Body Works!
          </p>
          <p style={{ paddingBottom: "0px" }}>Enter Email</p>
          <input
            style={{
              height: "35px",
              border: "1px solid rgb(92, 83, 83)",
              marginBottom: "15px",
            }}
          />
          <p style={{ paddingBottom: "-5px" }}>Confirm Email</p>
          <input style={{ height: "35px", border: "1px solid black" }} />
          <button className={styles.btnAt}>SUBMIT</button>
          <h5 className={styles.h5TagAt} style={{ marginTop: "10px" }}>
            GET CONNECTED
          </h5>
        </div>
        <div>
          <h5 className={styles.h5TagAt}>CUSTOMER CARE</h5>
          <p style={{ marginTop: "3px" }}>
            <a
              className={styles.footer_upATagAt}
              href="https://customercare.bathandbodyworks.com/"
            >
              Help & FAQs
            </a>
          </p>
          <p style={{ marginTop: "3px" }}>
            <a className={styles.footer_upATagAt}>Live Chat 8a - 12a ET</a>
          </p>
          <p style={{ marginTop: "3px" }}>
            <a
              className={styles.footer_upATagAt}
              href="https://customercare.bathandbodyworks.com/app/answers/detail/a_id/1523"
              target={"_blank"}
            >
              Shipping
            </a>
          </p>
          <p style={{ marginTop: "3px" }}>
            <a
              className={styles.footer_upATagAt}
              href="https://customercare.bathandbodyworks.com/app/answers/detail/a_id/1504"
              target={"_blank"}
            >
              Returns & Exchanges
            </a>
          </p>
          <p style={{ marginTop: "3px" }}>
            <a
              className={styles.footer_upATagAt}
              href="https://www.bathandbodyworks.com/customer-care/order-status"
            >
              Order Tracking
            </a>
          </p>
          <p style={{ marginTop: "3px" }}>
            <a
              className={styles.footer_upATagAt}
              href="https://www.bathandbodyworks.com/on/demandware.store/Sites-BathAndBodyWorks-Site/en_US/CustomerService-CorporateGiftsContactUs"
            >
              Corporate Sales & Gifts
            </a>
          </p>
          <p style={{ marginTop: "3px" }}>
            <a
              className={styles.footer_upATagAt}
              href="https://customercare.bathandbodyworks.com/app/home"
              target={"_blank"}
            >
              Contact Us
            </a>
          </p>
        </div>
        <div>
          <h5 className={styles.h5TagAt}>MY ACCOUNT</h5>
          <p style={{ marginTop: "3px" }}>
            <a className={styles.footer_upATagAt} href="">
              Sign In or Sign Up
            </a>
          </p>
          <p style={{ marginTop: "3px" }}>
            <a className={styles.footer_upATagAt} href="">
              Order Tracking
            </a>
          </p>
          <p style={{ marginTop: "3px" }}>
            <a className={styles.footer_upATagAt} href="">
              My Auto Refresh
            </a>
          </p>
          <p style={{ marginTop: "3px" }}>
            <a className={styles.footer_upATagAt} href="">
              My Love-It List
            </a>
          </p>
        </div>
        <div>
          <h5 className={styles.h5TagAt}>DISCOVER</h5>
          <p style={{ marginTop: "3px" }}>
            <a
              className={styles.footer_upATagAt}
              href="https://www.bbwinc.com/our-company/about-us"
            >
              About Us
            </a>
          </p>
          <p style={{ marginTop: "3px" }}>
            <a
              className={styles.footer_upATagAt}
              href="https://careers.bathandbodyworks.com/"
              target={"_blank"}
            >
              Careers
            </a>
          </p>
          <p style={{ marginTop: "3px" }}>
            <a
              className={styles.footer_upATagAt}
              href="https://www.bathandbodyworks.com/giftcards"
            >
              Gift Cards
            </a>
          </p>
          <p style={{ marginTop: "3px" }}>
            <a className={styles.footer_upATagAt} href="">
              Shop by Fragrance
            </a>
          </p>
          <p style={{ marginTop: "3px" }}>
            <a
              className={styles.footer_upATagAt}
              href="https://www.bathandbodyworks.com/e/product-ingredients?cm_sp=FOOTER-_-Ingredients-_-Ingredients"
            >
              Product Ingredients
            </a>
          </p>
          <p style={{ marginTop: "3px" }}>
            <a
              className={styles.footer_upATagAt}
              href="https://www.bathandbodyworks.com/get-inspired"
            >
              Get Inspired
            </a>
          </p>
          <p style={{ marginTop: "3px" }}>
            <a
              className={styles.footer_upATagAt}
              href="https://www.bathandbodyworks.com/m/diversity-equity-inclusion.html"
            >
              Diversity, Equity & Inclusion
            </a>
          </p>
        </div>
        <div>
          <h5 className={styles.h5TagAt}>FIND US</h5>
          <p style={{ marginTop: "3px" }}>
            <a
              className={styles.footer_upATagAt}
              href="https://www.bathandbodyworks.com/store-locator"
            >
              Store Locator
            </a>
          </p>
          <p style={{ marginTop: "3px" }}>
            <a
              className={styles.footer_upATagAt}
              href="https://www.bathandbodyworks.com/global-locations/global-locations.html"
            >
              Global Locations
            </a>
          </p>
        </div>
      </div>
      <div className={styles.footer_midAt}>
        <div>
          <a
            href="https://www.facebook.com/bathandbodyworks"
            target={"_blannk"}
            style={{ backgroundColor: "blue" }}
          >
            <i
              className="fa fa-facebook"
              aria-hidden="true"
              style={{
                color: "white",
                fontSize: "22px",
                paddingTop: "8px",
                paddingLeft: "9px",
              }}
            ></i>
          </a>
          <a
            href="https://twitter.com/bathbodyworks"
            target={"_blannk"}
            style={{ backgroundColor: "rgb(78, 146, 248)" }}
          >
            <i
              className="fa fa-twitter"
              aria-hidden="true"
              style={{ color: "white", paddingTop: "8px", paddingLeft: "9px" }}
            ></i>
          </a>
          <a
            href="https://www.instagram.com/bathandbodyworks/"
            target={"_blannk"}
            style={{ backgroundColor: "rgb(50, 88, 158)" }}
          >
            <i
              className="fa fa-instagram"
              aria-hidden="true"
              style={{ color: "white", paddingTop: "8px", paddingLeft: "9px" }}
            ></i>
          </a>

          <a
            href="https://www.youtube.com/user/bathandbodyworks"
            target={"_blannk"}
            style={{ backgroundColor: "red" }}
          >
            <i
              className="fa fa-youtube-square"
              aria-hidden="true"
              style={{ color: "white", paddingTop: "8px", paddingLeft: "9px" }}
            ></i>
          </a>
          <a
            href="https://www.pinterest.com/bathbodyworks/"
            target={"_blannk"}
            style={{ backgroundColor: "red" }}
          >
            <i
              className="fa fa-pinterest-p"
              aria-hidden="true"
              style={{ color: "white", paddingTop: "8px", paddingLeft: "9px" }}
            ></i>
          </a>
        </div>
        <a
          style={{ marginBottom: "35px" }}
          href="https://customercare.bathandbodyworks.com/app/answers/detail/a_id/1504"
          target=""
        >
          <img
            src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw0c8e6af7/images/evergreen/Happiness_Guaranteedtimes2_v2.jpg?yocs=o_s_"
            alt=""
            style={{ width: "420px", height: "108px", paddingTop: "-100px" }}
          />
        </a>
      </div>
      <div className={styles.footer_dnAt}>
        <div style={{ padding: "20px 0px 20px 0px" }}>
          <a
            className={styles.underline_hoverAt}
            href="https://www.bathandbodyworks.com/customer-care/terms-of-use.html"
          >
            Terms Of Use
          </a>
          <span>|</span>
          <a
            className={styles.underline_hoverAt}
            href="https://www.bathandbodyworks.com/customer-care/privacy-and-security.html"
          >
            Privacy Policy
          </a>
          <span>|</span>
          <a
            className={styles.underline_hoverAt}
            href="https://bugcrowd.com/lbrands-bbw-vdp?preview=b9230133a00cd5ba1e9eeb18798956d2"
            target={"_blank"}
          >
            Security Bug Report
          </a>
          <span>|</span>
          <a
            className={styles.underline_hoverAt}
            href="https://www.bathandbodyworks.com/customer-care/california-privacy-rights.html"
          >
            California Privacy Rights
          </a>
          <span>|</span>
          <a
            className={styles.underline_hoverAt}
            href="https://www.bathandbodyworks.com/customer-care/do-not-sell.html"
          >
            Do Not Sell My Personal Information (California)
          </a>
          <span>|</span>
          <a
            className={styles.underline_hoverAt}
            href="https://www.bbwinc.com/corporate-responsibility/supply-chain/transparency-in-supply-chains"
            target={"_blank"}
          >
            Transparency in Supply Chains
          </a>
          <span>|</span>
          <a
            className={styles.underline_hoverAt}
            href="https://www.bathandbodyworks.com/customer-care/privacy-and-security.html#2"
          >
            Ad Preferences
          </a>
        </div>
        <div style={{ marginTop: "-35px" }}>
          © 2022 Bath & Body Works Direct, Inc. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
