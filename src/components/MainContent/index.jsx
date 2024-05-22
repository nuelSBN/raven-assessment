import React, { useEffect, useState } from "react";
import "./main-content.css";
import Chart from "./partials/ChartsSection";
import Orders from "./partials/Orders";
import OrderSection from "components/OrdersContent";
import arrowup from "assets/arrow-up-grey.svg";
import rgb from "assets/rgb.svg";
import ggg from "assets/ggg.svg";
import rgg from "assets/rgg.svg";
import dropdown from "assets/dropdown.svg";

export default function MainContent() {
  const [activeTab, setActiveTab] = useState(1);
  const [mobileView, setMobileView] = useState(window.innerWidth <= 900);

  const handleSwitchTab = (id) => {
    setActiveTab(id);
  };

  useEffect(() => {
    const handleResize = () => {
      setMobileView(window.innerWidth <= 900);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {mobileView ? (
        <section className="main__content">
          <div className="main__content-tab">
            <div
              className={`${
                activeTab === 1 && "active"
              }  main__content-tab-links charts`}
              onClick={() => handleSwitchTab(1)}
            >
              Charts
            </div>
            <div
              className={`${
                activeTab === 2 && "active"
              }  main__content-tab-links orderbook`}
              onClick={() => handleSwitchTab(2)}
            >
              Orderbook
            </div>
            <div
              className={`${
                activeTab === 3 && "active"
              }  main__content-tab-links recent-trade`}
              onClick={() => handleSwitchTab(3)}
            >
              Recent trades
            </div>
          </div>

          {activeTab === 1 && <Chart />}
          {activeTab === 2 && <Orders />}
          <OrderSection />
        </section>
      ) : (
        <section className="desktop__main-content">
          <div className="grid__area">
            <div className="chart__area">
              <h1>chart area</h1>
            </div>
            <div className="order__area">
              <div className="order__area-tab">
                <div
                  className={`${
                    activeTab === 2 && "active"
                  }  main__content-tab-links orderbook`}
                  onClick={() => handleSwitchTab(2)}
                >
                  Orderbook
                </div>
                <div
                  className={`${
                    activeTab === 3 && "active"
                  }  main__content-tab-links recent-trade`}
                  onClick={() => handleSwitchTab(3)}
                >
                  Recent trades
                </div>
              </div>
              <div className="order__area-orders">
                <div className="order__area-orders-left">
                  <button>
                    <img src={rgb} alt="" />
                  </button>
                  <button>
                    <img src={ggg} alt="" />
                  </button>
                  <button>
                    <img src={rgg} alt="" />
                  </button>
                </div>
                <div className="order__area-orders-right">
                  <h1>10</h1>
                  <img src={dropdown} alt="" />
                </div>
              </div>
              <div className="orders-table-header">
                <div>
                  <p className="">Price</p>
                  <span>(USDT)</span>
                </div>
                <div>
                  <p>Amounts</p>
                  <span>(BTC)</span>
                </div>
                <div>
                  <p>Total</p>
                </div>
              </div>

              <div className="orders-table-body">
                <div>
                  <p>36920.12</p>
                  <p>0.758965</p>
                  <p>28,020.98</p>
                </div>
                <div>
                  <p>36920.12</p>
                  <p>0.758965</p>
                  <p>28,020.98</p>
                </div>
                <div>
                  <p>36920.12</p>
                  <p>0.758965</p>
                  <p>28,020.98</p>
                </div>
                <div>
                  <p>36920.12</p>
                  <p>0.758965</p>
                  <p>28,020.98</p>
                </div>
                <div>
                  <p>36920.12</p>
                  <p>0.758965</p>
                  <p>28,020.98</p>
                </div>
              </div>
              <div className="orders-order-price">
                <p>36,641.20</p>
                <img src={arrowup} alt="" />
                <p>36,641.20</p>
              </div>
              <div className="orders-table-body">
                <div>
                  <p style={{ color: "#25C26E" }}>36920.12</p>
                  <p>0.758965</p>
                  <p>28,020.98</p>
                </div>
                <div>
                  <p style={{ color: "#25C26E" }}>36920.12</p>
                  <p>0.758965</p>
                  <p>28,020.98</p>
                </div>
                <div>
                  <p style={{ color: "#25C26E" }}>36920.12</p>
                  <p>0.758965</p>
                  <p>28,020.98</p>
                </div>
                <div>
                  <p style={{ color: "#25C26E" }}>36920.12</p>
                  <p>0.758965</p>
                  <p>28,020.98</p>
                </div>
                <div>
                  <p style={{ color: "#25C26E" }}>36920.12</p>
                  <p>0.758965</p>
                  <p>28,020.98</p>
                </div>
              </div>
              <div className="orders-action-btns">
                {/* <SellButton
                  onClick={() => {
                    setIsModalOpen(true);
                    setModalType("buy");
                  }}
                  color={"#25c26e"}
                  children={"Buy"}
                />
                <SellButton
                  onClick={() => {
                    setIsModalOpen(true);
                    setModalType("sell");
                  }}
                  color={"#ff554a"}
                  children={"Sell"}
                /> */}
              </div>
            </div>
            <div className="shop__area"></div>
          </div>
          <OrderSection />
        </section>
      )}
    </>
  );
}
