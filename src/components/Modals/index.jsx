import React, { useEffect, useState } from "react";
import "./index.css";
import { useAppContext } from "contexts";
import info from "assets/info.svg";
import dropdown from "assets/dropdown.svg";

export default function Modal() {
  const { setIsModalOpen, modalType, setModalType } = useAppContext();

  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0.0);

  useEffect(() => {
    const calculatedTotal = parseFloat(price) * parseFloat(amount) || 0;
    setTotal(calculatedTotal.toFixed(2));
  }, [price, amount]);

  return (
    <div className="buy__modal">
      <div className="overlay" onClick={() => setIsModalOpen(false)}></div>
      <div className="buy__modal-content">
        <div className="buy__modal-content-top">
          <button
            className={modalType === "buy" && "active"}
            onClick={() => setModalType("buy")}
          >
            buy
          </button>
          <button
            className={modalType === "sell" && "sell_active"}
            onClick={() => setModalType("sell")}
          >
            sell
          </button>
        </div>
        <div className="buy__modal-content-middle">
          <button className="active">limit</button>
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
          <input type="text" placeholder="0.00USD" readOnly value={total} />
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
        <div className="deposit_btn" onClick={() => setIsModalOpen(false)}>
          <button>Deposit</button>
        </div>
      </div>
    </div>
  );
}
