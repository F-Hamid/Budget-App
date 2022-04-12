import React from "react";

function PaidItem({ paidData, removePidItem, removePaidList }) {
  let total = 0;
  console.log(paidData);
  const paidRender = () => {
    return paidData.map(({ item, price, id }) => {
      total += Number(price);

      return (
        <div key={id} className="input-group mb-3 item  center ">
          <span className="input-group-text">$</span>
          <span className="input-group-text price">{0 + Number(price)}</span>
          <span className="input-group-text charge">{item}</span>

          <span
            onClick={() => removePidItem(id)}
            className="input-group-text delete "
          >
            <i
              onClick={() => removePidItem(id)}
              className="fa-solid fa-eraser"
            ></i>
          </span>
        </div>
      );
    });
  };

  return (
    <>
      <section className="card center paid">
        {paidRender()}

        <h1 className="list-title">
          Total Paid : <span className="badge bg-secondary">{total}$</span>
        </h1>
        <button onClick={removePaidList} className="btn btn-danger btn-remove ">
          <i className="fa-solid fa-circle-minus "></i> Remove List
        </button>
      </section>
    </>
  );
}

export default PaidItem;
