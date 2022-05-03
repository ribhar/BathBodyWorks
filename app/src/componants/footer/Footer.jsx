import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_up}>
        <div>
          <p style={{ paddingBottom: "10px" }}>
            Get email offers & the latest news from Bath & Body Works!
          </p>
          <p style={{ paddingBottom: "15px" }}>Enter Email</p>
          <input style={{ height: "30px" }} />
          <p style={{ paddingBottom: "15px" }}>Confirm Email</p>
          <input style={{ height: "30px" }} />
          <button className={styles.btnAt}>SUBMIT</button>
          <h5>GET CONNECTED</h5>
        </div>
        <div>
          <h5>CUSTOMER CARE</h5>
          <p>
            <a href="https://customercare.bathandbodyworks.com/">Help & FAQs</a>
          </p>
          <p>
            <a>Live Chat 8a - 12a ET</a>
          </p>
          <p>
            <a
              href="https://customercare.bathandbodyworks.com/app/answers/detail/a_id/1523"
              target={"_blank"}
            >
              Shipping
            </a>
          </p>
          <p>
            <a
              href="https://customercare.bathandbodyworks.com/app/answers/detail/a_id/1504"
              target={"_blank"}
            >
              Returns & Exchanges
            </a>
          </p>
          <p>
            <a href="https://www.bathandbodyworks.com/customer-care/order-status">
              Order Tracking
            </a>
          </p>
          <p>
            <a href="https://www.bathandbodyworks.com/on/demandware.store/Sites-BathAndBodyWorks-Site/en_US/CustomerService-CorporateGiftsContactUs">
              Corporate Sales & Gifts
            </a>
          </p>
          <p>
            <a
              href="https://customercare.bathandbodyworks.com/app/home"
              target={"_blank"}
            >
              Contact Us
            </a>
          </p>
        </div>
        <div>
          <h5>MY ACCOUNT</h5>
          <p>
            <a href="">Sign In or Sign Up</a>
          </p>
          <p>
            <a href="">Order Tracking</a>
          </p>
          <p>
            <a href="">My Auto Refresh</a>
          </p>
          <p>
            <a href="">My Love-It List</a>
          </p>
        </div>
        <div>
          <h5>DISCOVER</h5>
          <p>
            <a href="https://www.bbwinc.com/our-company/about-us">About Us</a>
          </p>
          <p>
            <a href="https://careers.bathandbodyworks.com/" target={"_blank"}>
              Careers
            </a>
          </p>
          <p>
            <a href="https://www.bathandbodyworks.com/giftcards">Gift Cards</a>
          </p>
          <p>
            <a href="">Shop by Fragrance</a>
          </p>
          <p>
            <a href="https://www.bathandbodyworks.com/e/product-ingredients?cm_sp=FOOTER-_-Ingredients-_-Ingredients">
              Product Ingredients
            </a>
          </p>
          <p>
            <a href="https://www.bathandbodyworks.com/get-inspired">
              Get Inspired
            </a>
          </p>
          <p>
            <a href="https://www.bathandbodyworks.com/m/diversity-equity-inclusion.html">
              Diversity, Equity & Inclusion
            </a>
          </p>
        </div>
        <div>
          <h5>FIND US</h5>
          <p>
            <a href="https://www.bathandbodyworks.com/store-locator">
              Store Locator
            </a>
          </p>
          <p>
            <a href="https://www.bathandbodyworks.com/global-locations/global-locations.html">
              Global Locations
            </a>
          </p>
        </div>
      </div>
      <div className={styles.footer_mid}>
        <div>
          <a
            href="https://www.facebook.com/bathandbodyworks"
            target={"_blannk"}
            style={{ backgroundColor: "blue" }}
          >
            <i
              class="fa fa-facebook"
              aria-hidden="true"
              style={{ color: "white", fontSize: "22px", paddingTop: "8px" }}
            ></i>
          </a>
          <a
            href="https://twitter.com/bathbodyworks"
            target={"_blannk"}
            style={{ backgroundColor: "rgb(78, 146, 248)" }}
          >
            <i
              class="fa fa-twitter"
              aria-hidden="true"
              style={{ color: "white", paddingTop: "8px" }}
            ></i>
          </a>
          <a
            href="https://www.instagram.com/bathandbodyworks/"
            target={"_blannk"}
            style={{ backgroundColor: "rgb(50, 88, 158)" }}
          >
            <i
              class="fa fa-instagram"
              aria-hidden="true"
              style={{ color: "white", paddingTop: "8px" }}
            ></i>
          </a>

          <a
            href="https://www.youtube.com/user/bathandbodyworks"
            target={"_blannk"}
            style={{ backgroundColor: "red" }}
          >
            <i
              class="fa fa-youtube-square"
              aria-hidden="true"
              style={{ color: "white", paddingTop: "8px" }}
            ></i>
          </a>
          <a
            href="https://www.pinterest.com/bathbodyworks/"
            target={"_blannk"}
            style={{ backgroundColor: "red" }}
          >
            <i
              class="fa fa-pinterest-p"
              aria-hidden="true"
              style={{ color: "white", paddingTop: "8px" }}
            ></i>
          </a>
        </div>
        <a
          href="https://customercare.bathandbodyworks.com/app/answers/detail/a_id/1504"
          target=""
        >
          <img
            src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw0c8e6af7/images/evergreen/Happiness_Guaranteedtimes2_v2.jpg?yocs=o_s_"
            alt=""
            style={{ width: "420px", height: "108px", padding: "15px" }}
          />
        </a>
      </div>
      <div className={styles.footer_dn}>
        <div style={{ padding: "30px 0px 20px 0px" }}>
          <a
            className={styles.underline_hover}
            href="https://www.bathandbodyworks.com/customer-care/terms-of-use.html"
          >
            Terms Of Use
          </a>
          <span>|</span>
          <a
            className={styles.underline_hover}
            href="https://www.bathandbodyworks.com/customer-care/privacy-and-security.html"
          >
            Privacy Policy
          </a>
          <span>|</span>
          <a
            className={styles.underline_hover}
            href="https://bugcrowd.com/lbrands-bbw-vdp?preview=b9230133a00cd5ba1e9eeb18798956d2"
            target={"_blank"}
          >
            Security Bug Report
          </a>
          <span>|</span>
          <a
            className={styles.underline_hover}
            href="https://www.bathandbodyworks.com/customer-care/california-privacy-rights.html"
          >
            California Privacy Rights
          </a>
          <span>|</span>
          <a
            className={styles.underline_hover}
            href="https://www.bathandbodyworks.com/customer-care/do-not-sell.html"
          >
            Do Not Sell My Personal Information (California)
          </a>
          <span>|</span>
          <a
            className={styles.underline_hover}
            href="https://www.bbwinc.com/corporate-responsibility/supply-chain/transparency-in-supply-chains"
            target={"_blank"}
          >
            Transparency in Supply Chains
          </a>
          <span>|</span>
          <a
            className={styles.underline_hover}
            href="https://www.bathandbodyworks.com/customer-care/privacy-and-security.html#2"
          >
            Ad Preferences
          </a>
        </div>
        <div>© 2022 Bath & Body Works Direct, Inc. All Rights Reserved.</div>
      </div>
    </div>
  );
};

export default Footer;
