import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { formatNumber } from "../helpers/formatNumbers";

const Extras = ({ data, changeExtras }) => {
  const [qty, setQty] = useState(0);

  const addQty = () => {
    setQty(qty + 1);
    changeExtras("add", { ...data, qty: qty + 1 });
  };

  const minQty = () => {
    setQty(qty - 1);
    changeExtras("min", { ...data, qty: qty - 1 });
  };

  return (
    <div className="border rounded py-2 px-3 d-flex justify-content-between align-items-center mb-2">
      <div className="d-flex align-items-center gap-3">
        <img
          src={data.image}
          alt={data.name}
          title={data.name}
          className="extras-img"
        />

        <div>
          <div className="extras-product">{data.name}</div>
          <div className="extras-price">{formatNumber(data.price)}</div>
        </div>
      </div>
      {qty === 0 && (
        <div className="extras-plus" onClick={addQty}>
          <FaPlus color="#fff" size={12} />
        </div>
      )}

      {qty > 0 && (
        <div className="d-flex justify-content-between align-items-center gap-3">
          <div
            className="text-xl font-bold color-primary cursor-pointer"
            onClick={minQty}
          >
            -
          </div>

          <div className="">{qty}</div>

          <div
            className="text-xl font-bold color-primary cursor-pointer"
            onClick={addQty}
          >
            +
          </div>
        </div>
      )}
    </div>
  );
};

export default Extras;
