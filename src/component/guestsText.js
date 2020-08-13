import React from "react";

function GuestsText({ guests }) {
  return <div className={guests === 0 ? "selectedGuests grey" : "guests"}>{guests === 0 ? "Add guests" : guests + " guests"}</div>;
}

export default GuestsText;
