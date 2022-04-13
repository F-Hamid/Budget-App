import React from "react";

function BudgetList({ data, removeList, removeItem, onPaid }) {
  //
  // List
  let total = 0;
  const listRender = () => {
    return data.map(({ item, price, id }) => {
      total += Number(price);

      return (
        <div key={id} className="input-group mb-3 item  center ">
          <span className="input-group-text">$</span>
          <span className="input-group-text price">{0 + Number(price)}</span>

          <span className="input-group-text charge">{item}</span>

          <span
            onClick={() => onPaid(id)}
            className="input-group-text delete edit "
          >
            <i
              onClick={() => onPaid(id)}
              className="fa-solid fa-list-check"
            ></i>
          </span>
          <span
            onClick={() => removeItem(id)}
            className="input-group-text delete "
          >
            <i
              onClick={() => removeItem(id)}
              className="fa-solid fa-eraser"
            ></i>
          </span>
        </div>
      );
    });
  };

  return (
    <>
      <section className="card center item-card">
        {listRender()}

        <h1 className="list-title">
          To Pay : <span className="badge bg-secondary">{total}$</span>
        </h1>
        <button onClick={removeList} className="btn btn-danger btn-remove ">
          <i className="fa-solid fa-circle-minus "></i> Remove List
        </button>
      </section>
    </>
  );
}

export default BudgetList;
