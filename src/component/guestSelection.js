import React from "react";
import Counter from "./counter";

function GuestSelection({ adult, child, onChangeAdult, onChangeChild }) {
  return (
    <div className="guestSelection selection">
      <div className="guestrow">
        <div className="title">
          <span className="type">Adult</span>
          <span className="label">Ages 13 or above</span>
        </div>
        <Counter value={adult} onClick={onChangeAdult} />
      </div>
      <div className="guestrow">
        <div className="title">
          <span className="type">Children</span>
          <span className="label">Ages 2 - 12</span>
        </div>
        <Counter value={child} onClick={onChangeChild} />
      </div>
    </div>
  );
}

export default GuestSelection;
