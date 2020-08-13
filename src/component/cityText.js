import React from "react";

function CityText({ city }) {
  return <div className="selectedCity">{city === "" ? "Finland" : city + ", Finland"}</div>;
}

export default CityText;
