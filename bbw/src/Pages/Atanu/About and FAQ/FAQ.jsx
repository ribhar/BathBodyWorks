import React from "react";
import NavBar from "../../../Components/NavBar";
import Footer2 from "../../../Components/Footer/Footer2";

const F_Q = () => {
  return (
      <>
      <NavBar/>
    <div
      style={{
        width: "70%",
        margin: "auto",
      }}
    >
      <p
        style={{
          fontSize: "25px",
          fontWeight: "bold",
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        How Can We Help You?
      </p>

      <input
        type="text"
        placeholder="Type your question here..."
        style={{
          width: "400px",
          padding: "10px",
          borderBottom: "1px solid black",
          outline: "none",
          marginLeft: "28%",
          marginTop: "10px",
        }}
      />
      <i
        className="fa fa-search"
        aria-hidden="true"
        style={{ fontSize: "26px", marginLeft: "10px" }}
      ></i>
      <div style={{ margin: "50px 0px 30px 20px" }}>
        <img
          src="https://customercare.bathandbodyworks.com/euf/assets/themes/bbw/images/faq.png"
          alt=""
        />
        <p style={{ marginTop: "20px" }}>FREQUENTLY ASKED QUESTIONS</p>
        <p
          style={{
            marginTop: "10px",
            fontSize: "15px",
            color: "rgb(102, 98, 98)",
          }}
        >
          What is your return policy?
        </p>
        <p
          style={{
            marginTop: "10px",
            fontSize: "15px",
            color: "rgb(102, 98, 98)",
          }}
        >
          Shipping Options: United States
        </p>
        <p
          style={{
            marginTop: "10px",
            fontSize: "15px",
            color: "rgb(102, 98, 98)",
          }}
        >
          What if my package is late or lost?
        </p>
        <p
          style={{
            marginTop: "10px",
            fontSize: "15px",
            color: "rgb(102, 98, 98)",
          }}
        >
          What if my item arrives damaged?
        </p>
        <p
          style={{
            marginTop: "10px",
            marginBottom: "35px",
            fontSize: "15px",
            color: "rgb(102, 98, 98)",
          }}
        >
          How do I get added to your mailing list?
        </p>
      </div>
      <hr
        style={{
          width: "100%",
          borderTop: "2px solid rgb(202, 196, 196)",
        }}
      />
      <div
        className="grid grid-cols-4"
        style={{ margin: "30px 0px 20px 20px" }}
      >
        <div>
          <img
            src="https://customercare.bathandbodyworks.com/euf/assets/images/1228.svg"
            alt=""
            style={{ height: "80px", width: "70px" }}
          />
          <p style={{ marginTop: "20px", color: "rgb(102, 98, 98)" }}>
            SHOPPING TOOLS
          </p>
          <p
            style={{
              marginTop: "10px",
              fontSize: "15px",
              color: "rgb(102, 98, 98)",
            }}
          >
            Order basics
          </p>
          <p
            style={{
              marginTop: "10px",
              fontSize: "15px",
              color: "rgb(102, 98, 98)",
            }}
          >
            Offers
          </p>
          <p
            style={{
              marginTop: "10px",
              fontSize: "15px",
              color: "rgb(102, 98, 98)",
            }}
          >
            Accounts & services
          </p>
          <p
            style={{
              marginTop: "10px",
              fontSize: "15px",
              color: "rgb(102, 98, 98)",
              marginBottom: "30px",
            }}
          >
            My Bath & Body Works
          </p>
          <img
            src="https://customercare.bathandbodyworks.com/euf/assets/images/1231.svg"
            alt=""
            style={{ height: "80px", width: "70px" }}
          />
          <p style={{ marginTop: "20px", color: "rgb(102, 98, 98)" }}>
            EXCHANGES & RETURNS
          </p>
          <p
            style={{
              marginTop: "10px",
              fontSize: "15px",
              color: "rgb(102, 98, 98)",
            }}
          >
            Return options
          </p>
          <p
            style={{
              marginTop: "10px",
              fontSize: "15px",
              color: "rgb(102, 98, 98)",
            }}
          >
            Gifts
          </p>
        </div>
        <div>
          {" "}
          <img
            src="https://customercare.bathandbodyworks.com/euf/assets/images/1229.svg"
            alt=""
            style={{ height: "80px", width: "70px" }}
          />
          <p style={{ marginTop: "20px", color: "rgb(102, 98, 98)" }}>
            PRODUCTS
          </p>
          <p
            style={{
              marginTop: "10px",
              fontSize: "15px",
              color: "rgb(102, 98, 98)",
            }}
          >
            General information
          </p>
          <p
            style={{
              marginTop: "10px",
              fontSize: "15px",
              color: "rgb(102, 98, 98)",
            }}
          >
            Product usage
          </p>
          <p
            style={{
              marginTop: "10px",
              fontSize: "15px",
              color: "rgb(102, 98, 98)",
            }}
          >
            Retired Fragrances
          </p>
          <p
            style={{
              marginTop: "10px",
              fontSize: "15px",
              color: "rgb(102, 98, 98)",
              marginBottom: "30px",
            }}
          >
            Gift cards
          </p>
          <img
            src="https://customercare.bathandbodyworks.com/euf/assets/images/1232.svg"
            alt=""
            style={{ height: "80px", width: "70px" }}
          />
          <p style={{ marginTop: "20px", color: "rgb(102, 98, 98)" }}>STORES</p>
          <p
            style={{
              marginTop: "10px",
              fontSize: "15px",
              color: "rgb(102, 98, 98)",
            }}
          >
            General information
          </p>
          <p
            style={{
              marginTop: "10px",
              fontSize: "15px",
              color: "rgb(102, 98, 98)",
            }}
          >
            Store offers
          </p>
          <p
            style={{
              marginTop: "10px",
              fontSize: "15px",
              color: "rgb(102, 98, 98)",
            }}
          >
            Return options
          </p>
        </div>
        <div>
          <img
            src="https://customercare.bathandbodyworks.com/euf/assets/images/1230.svg"
            alt=""
            style={{ height: "80px", width: "70px" }}
          />
          <p style={{ marginTop: "20px", color: "rgb(102, 98, 98)" }}>
            SHIPPING & DELIVERY
          </p>
          <p
            style={{
              marginTop: "10px",
              fontSize: "15px",
              color: "rgb(102, 98, 98)",
            }}
          >
            Shipping Options
          </p>
          <p
            style={{
              marginTop: "10px",
              fontSize: "15px",
              color: "rgb(102, 98, 98)",
            }}
          >
            Order Status
          </p>
          <p
            style={{
              marginTop: "10px",
              fontSize: "15px",
              color: "rgb(102, 98, 98)",
            }}
          >
            Order Tracking & Delivery
          </p>
          <p
            style={{
              marginTop: "10px",
              fontSize: "15px",
              color: "rgb(102, 98, 98)",
              marginBottom: "30px",
            }}
          >
            Buy Online, Pick Up In Store
          </p>
          <img
            src="https://customercare.bathandbodyworks.com/euf/assets/images/1233.svg"
            alt=""
            style={{ height: "80px", width: "70px" }}
          />
          <p style={{ marginTop: "20px", color: "rgb(102, 98, 98)" }}>
            COMPANY INFO
          </p>
          <p
            style={{
              marginTop: "10px",
              fontSize: "15px",
              color: "rgb(102, 98, 98)",
            }}
          >
            Careers
          </p>
          <p
            style={{
              marginTop: "10px",
              fontSize: "15px",
              color: "rgb(102, 98, 98)",
            }}
          >
            Privacy & security
          </p>
          <p
            style={{
              marginTop: "10px",
              fontSize: "15px",
              color: "rgb(102, 98, 98)",
            }}
          >
            General information
          </p>
        </div>
        <div
          style={{
            width: "95%",
            height: "300px",
            border: "2px solid rgb(202, 196, 196)",
          }}
        >
          <img
            style={{ marginTop: "7px" }}
            src="https://customercare.bathandbodyworks.com/euf/assets/images/customerCARE_gingham_d.png"
            alt=""
          />
          <p
            style={{
              fontSize: "25px",
              fontWeight: "bold",
              textAlign: "center",
              marginTop: "30px",
            }}
          >
            CONTACT US
          </p>
          <p
            style={{
              marginTop: "10px",
              fontSize: "13px",
              color: "rgb(102, 98, 98)",
              textAlign: "center",
            }}
          >
            We want to hear from you!
          </p>
          <p
            style={{
              marginTop: "10px",
              fontSize: "15px",
              color: "rgb(102, 98, 98)",
              textAlign: "center",
            }}
          >
            Live Chat
          </p>
          <p
            style={{
              marginTop: "10px",
              marginBottom: "23px",
              fontSize: "15px",
              color: "rgb(102, 98, 98)",
              textAlign: "center",
            }}
          >
            Chat With Us: 8a - 12a EST
          </p>
          <p></p>
          <img
            src="https://customercare.bathandbodyworks.com/euf/assets/images/customerCARE_gingham_d.png"
            alt=""
          />
        </div>
      </div>
    </div>
    <Footer2/>
    </>
  );
};

export default F_Q;
