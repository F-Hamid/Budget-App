import React, { useEffect, useState } from "react";
import "../style.css";

function AddBudget({ onSubmit, amount, charge }) {
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [priceTyping, setPriceTyping] = useState("");
  const [itemTyping, setItemTyping] = useState("");

  const onFormSubmit = (e) => {
    if (item !== "" && price !== "") {
      onSubmit(e, item, price);
      setItemTyping("");
      setPriceTyping("");
    } else {
      e.preventDefault();
      window.alert("Please enter valid inputs!");
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setItem(itemTyping);
      setPrice(priceTyping);
    }, 200);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [priceTyping, itemTyping]);

  return (
    <>
      <h1 className="card-title">Budget App</h1>
      <div className="card center">
        <div className="card-body ">
          <div className="main-form">
            <form onSubmit={(e) => onFormSubmit(e)} className="change">
              <label className="label" htmlFor="change-input">
                Charge
              </label>

              <input
                type="text"
                placeholder="rent"
                id="change-input"
                className="form-control "
                aria-describedby="basic-addon1"
                onChange={(e) => setItemTyping(e.target.value)}
                value={itemTyping}
              />
            </form>
            <form onSubmit={(e) => onFormSubmit(e)} className="amount">
              <label className="label" htmlFor="amount-input">
                Amount
              </label>
              <input
                type="number"
                id="amount-input"
                placeholder="400$"
                className="form-control "
                aria-describedby="basic-addon1"
                onChange={(e) => setPriceTyping(e.target.value)}
                value={priceTyping}
              ></input>
            </form>
          </div>
        </div>
        <button
          type="submit"
          onClick={(e) => onFormSubmit(e)}
          className="btn btn-danger "
        >
          <i className="fa-solid fa-angles-down"></i> Add Item
        </button>
      </div>
    </>
  );
}

export default AddBudget;
