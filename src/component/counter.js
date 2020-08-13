import React from "react";

function Counter({ value, onClick }) {
  return (
    <div className="counter">
      <button className="btn-minus" name="minus" type="button" onClick={onClick}>
        -
      </button>
      <div className="countNumber">{value}</div>
      <button className="btn-plus" name="plus" type="button" onClick={onClick}>
        +
      </button>
    </div>
  );
}

export default Counter;
