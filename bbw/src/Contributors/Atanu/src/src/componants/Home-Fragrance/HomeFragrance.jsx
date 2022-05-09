import React from "react";
import styles from "./HomeFragrance.module.css";
import { Link } from "react-router-dom";

const HomeFragrance = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "16% 82%",
        gap: "2%",
        margin: "20px",
      }}
    >
      <div className="grid" style={{ marginTop: "100px", height: "1700px" }}>
        <img
          src="https://media0.giphy.com/media/fvqVax5PXIPm4i45Zw/giphy.gif"
          alt=""
        />

        <img
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bath-and-body-works-square-1566838843.gif"
          alt=""
        />

        <img
          src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwded3a953/images/Spring2022/diff_new-wfbulb-sc_0_sp1_gpt.gif?yocs=s_"
          alt=""
        />
        <img
          src="https://images.milledcdn.com/2020-02-04/wOoTWsuvQ8LX7n7N/JT22b5d9GxiE.gif"
          alt=""
        />
        <img
          src="https://media0.giphy.com/media/NzHJxQSgLPZZYIhQkk/giphy.gif"
          alt=""
        />
        <img
          src="data:image/png;base64,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"
          alt=""
        />
      </div>

      <div>
        <div>
          <p style={{ fontSize: "24px" }}>Home Fragrance</p>
          <hr
            style={{
              width: "100%",
              margin: "15px 0px 35px 0px",
              borderTop: "1px solid black",
            }}
          />
          <img
            src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw63538dd8/images/Spring2022/xcat_homefrag_0_sp1_lb.jpg?yocs=s_"
            alt=""
          />
          <div style={{ display: "flex", marginTop: "30px", gap: "3%" }}>
            <hr
              style={{
                width: "40%",
                margin: "15px 0px 35px 0px",
                borderTop: "1px solid black",
              }}
            />
            <h5 style={{ fontSize: "16px", fontWeight: "bold" }}>
              SHOP BY CATEGORY
            </h5>
            <hr
              style={{
                width: "39%",
                margin: "15px 0px 35px 0px",
                borderTop: "1px solid black",
              }}
            />
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            <Link to="/candlesAt">
              <img
                style={{ height: "270px", width: "300px" }}
                src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwffda5c2c/images/Spring2022/cndl_mday-all_sp3_vn.jpg?yocs=o_s_"
                alt=""
              />
              <div className={styles.catHoAt}>
                <h6
                  style={{
                    fontSize: "12px",
                    fontWeight: "bold",
                    marginTop: "8px",
                  }}
                >
                  CANDLES
                </h6>
              </div>
            </Link>
            <Link to="/wallFlowersAt">
              <img
                style={{ height: "270px", width: "300px" }}
                src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwc9328827/images/Spring2022/diff_wf-core_0_jansas_vn.jpg?yocs=o_s_"
                alt=""
              />
              <div className={styles.catHoAt}>
                <h6
                  style={{
                    fontSize: "12px",
                    fontWeight: "bold",
                    marginTop: "8px",
                  }}
                >
                  WALL FLOWERS
                </h6>
              </div>
            </Link>
            <Link to="/roomSpraysAt">
              <img
                style={{ height: "270px", width: "300px" }}
                src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dwfa2317a9/images/Spring2022/diff_crs_0_sp1_vn.jpg?yocs=o_s_"
                alt=""
              />
              <div className={styles.catHoAt}>
                <h6
                  style={{
                    fontSize: "12px",
                    fontWeight: "bold",
                    marginTop: "8px",
                  }}
                >
                  ROOM SPRAYS
                </h6>
              </div>
            </Link>
            <Link to="/carFragAt">
              <img
                style={{ height: "270px", width: "300px" }}
                src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw67e2d77a/images/Spring2022/diff_car_0_sp1_vn.jpg?yocs=o_s_"
                alt=""
              />
              <div className={styles.catHoAt}>
                <h6
                  style={{
                    fontSize: "12px",
                    fontWeight: "bold",
                    marginTop: "8px",
                  }}
                >
                  CAR FRAGRANCE
                </h6>
              </div>
            </Link>
          </div>
          <Link to="/newHoFragAt">
          
            <img
              style={{ marginTop: "20px" }}
              src="https://cdn-fsly.yottaa.net/5d669b394f1bbf7cb77826ae/www.bathandbodyworks.com/v~4b.216/on/demandware.static/-/Sites-BathAndBodyWorks-Library/default/dw2297f3fb/images/Spring2022/xcat_oasis-preview-home_sp3_lb.jpg?yocs=s_"
              alt=""
            />
          </Link>

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
              About Home Fragrance from Bath & Body Works
            </p>
            <p style={{ marginTop: "20px", color: "rgb(104, 99, 99)" }}>
              True story: Bath & Body Works candles turn your house into a home.
              All it takes is the perfect fragrance (or two) (or five!) and
              you’re instantly in a scented wonderland.
            </p>
            <p style={{ marginTop: "30px", color: "rgb(104, 99, 99)" }}>
              And we call them the World’s Best 3-Wick Candles for a reason:
              these soy-based goodies last for up to 45 hours, giving you
              room-filling fragrance from top to bottom. Plus, with over 50
              scents to choose from, our candles are the perfect way to add that
              extra touch of magic when you’re hosting guests. That feeling when
              someone says “OMG, it smells so good in here”? It’s our fave
              compliment.
            </p>
            <p style={{ marginTop: "30px", color: "rgb(104, 99, 99)" }}>
              Have a small room that needs some fragrance goodness…or want to
              give a totally new scent a try? That’s where our single wick
              candles come in. Perfect for the bathroom, kitchen or anywhere
              else that needs a boost, these scented candles fill up the room
              with major fragrance…even though they come in a smaller package.
            </p>
            <p style={{ marginTop: "30px", color: "rgb(104, 99, 99)" }}>
              We’re also super into aromatherapy candles for a little
              end-of-the-day relaxation. Grab your favorite scent – or choose
              one based on your mood – and prepare to feel amazing.
            </p>
            <p style={{ marginTop: "30px", color: "rgb(104, 99, 99)" }}>
              Pro tip: candles also make incredible gifts, so stock up on a few
              of your loves to keep in your gift closet. You never know when
              those occasions might pop up. Bonus points if you pick out a
              candle holder or accessory to throw in the package (or just for
              yourself).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFragrance;
