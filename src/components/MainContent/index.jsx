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
import info from "assets/info.svg";
import { useAppContext } from "contexts";

export default function MainContent() {
  const [activeTab, setActiveTab] = useState(1);
  const [mobileView, setMobileView] = useState(window.innerWidth <= 900);
  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0.0);

  const { setIsModalOpen, modalType, setModalType } = useAppContext();

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

  useEffect(() => {
    const calculatedTotal = parseFloat(price) * parseFloat(amount) || 0;
    setTotal(calculatedTotal.toFixed(2));
  }, [price, amount]);

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
              <div className="order__area-table-header">
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

              <div className="order__area-table-body">
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
            </div>
            <div className="shop__area">
              <div className="shop__area-content-top">
                <button className={modalType === "buy" && "active"}>buy</button>
                <button
                  className={modalType === "sell" && "sell_active"}
                  onClick={() => setModalType("sell")}
                >
                  sell
                </button>
              </div>
              <div className="shop__area-content-middle">
                <button className="active">Limit</button>
                <button>Market</button>
                <button>Stop-Limit</button>
              </div>
              <div className="form__control">
                <p>
                  <span>Limit price</span>
                  <span>
                    <img src={info} alt="" />
                  </span>
                </p>
                <input
                  type="text"
                  placeholder="0.00USD"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="form__control">
                <p>
                  <span>Amount</span>
                  <span>
                    <img src={info} alt="" />
                  </span>
                </p>
                <input
                  type="text"
                  placeholder="0.00USD"
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
              <div className="form__control">
                <p>
                  <span>Type</span>
                  <span>
                    <img src={info} alt="" />
                  </span>
                </p>
                <select name="" id="">
                  <option value="1">Good till cancelled</option>
                  <option value="1">Fill or kill</option>
                  <option value="1">Good till date</option>
                </select>
              </div>
              <div className="form__control checkbox">
                <p className="">
                  <input type="checkbox" id="checkbox" />
                  <label htmlFor="checkbox">Post Only</label>
                </p>
              </div>
              <div className="form__control checkbox">
                <p>
                  <span>Total</span>
                </p>
                <input
                  type="text"
                  placeholder="0.00USD"
                  readOnly
                  value={total}
                />
              </div>
              <div className="modal__btn">
                <button className="" onClick={() => setIsModalOpen(false)}>
                  Buy BTC
                </button>
              </div>
              <div className="modal__extras">
                <div className="modal__extras-left">
                  <p>Total account value</p>
                  <span>0.00</span>
                </div>
                <div className="modal__extras-right">
                  <span>NGN</span>
                  <img src={dropdown} alt="" />
                </div>
              </div>
              <div className="modal__extras">
                <div className="modal__extras-left">
                  <p>Open Orders</p>
                  <span>0.00</span>
                </div>
                <div className="modal__extras-right">
                  <p>Available</p>
                  <span>0.00</span>
                </div>
              </div>
              <div className="deposit_btn">
                <button>Deposit</button>
              </div>
            </div>
          </div>
          <OrderSection />
        </section>
      )}
    </>
  );
}
