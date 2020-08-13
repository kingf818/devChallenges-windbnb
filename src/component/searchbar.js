import React from "react";
import CityText from "./cityText";
import GuestsText from "./guestsText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Searchbar({ city, adult, child, onClick }) {
  return (
    <div className="search-gp" type="button">
      <div onClick={() => onClick("city")}>
        <CityText city={city} />
      </div>
      <div onClick={() => onClick("guest")}>
        <GuestsText guests={adult + child} />
      </div>
      <div className="search" onClick={onClick}>
        <FontAwesomeIcon icon={faSearch} />
      </div>
    </div>
  );
}

export default Searchbar;
