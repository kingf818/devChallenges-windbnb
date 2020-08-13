import React, { useState } from "react";
import CityText from "./cityText";
import GuestsText from "./guestsText";
import CitySelectionList from "./citySelectionList";
import GuestSelection from "./guestSelection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faSearch } from "@fortawesome/free-solid-svg-icons";
import { BrowserView, MobileView } from "react-device-detect";

function SearchOverlay({ type, defaultCity, defaultAdult, defaultChild, onClick }) {
  const [currentSelection, setCurrentSelection] = useState(type);
  const [selectedCity, setSelectedCity] = useState(defaultCity);
  const [selectedAdult, setSelectedAdult] = useState(defaultAdult);
  const [selectedChild, setSelectedChild] = useState(defaultChild);

  const handleSelectCity = (city) => {
    setSelectedCity(city);
  };

  const handleChangeAdult = (e) => {
    let adult = selectedAdult;
    if (e.currentTarget.name === "minus" && adult > 0) adult--;
    else if (e.currentTarget.name === "plus") adult++;

    setSelectedAdult(adult);
  };

  const handleChangeChild = (e) => {
    let child = selectedChild;
    if (e.currentTarget.name === "minus" && child > 0) child--;
    else if (e.currentTarget.name === "plus") child++;
    setSelectedChild(child);
  };

  const handleSearch = (e) => {
    //const { selectedCity, selectedAdult, selectedChild } = this.state;
    window.location.replace("/?city=" + selectedCity + "&adult=" + selectedAdult + "&child=" + selectedChild);
  };

  return (
    <div className="searchOverlay">
      <div className="overlayContainer">
        <div className="header">
          <span>Edit your search</span>
          <button type="button" onClick={onClick}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className="searchbar-gp">
          <div className="city-gp">
            <div
              className={currentSelection === "city" ? "citybar searchbar active" : "citybar searchbar"}
              onClick={() => setCurrentSelection("city")}>
              <span className="label">LOCATION</span>
              <CityText city={selectedCity} />
            </div>
            <BrowserView>{currentSelection === "city" ? <CitySelectionList onSelect={handleSelectCity} /> : null}</BrowserView>
          </div>
          <div className="guest-gp">
            <div
              className={currentSelection === "guest" ? "guestbar searchbar active" : "guestbar searchbar"}
              onClick={() => setCurrentSelection("guest")}>
              <span className="label">GUESTS</span>
              <GuestsText guests={selectedAdult + selectedChild} />
            </div>
            <BrowserView>
              {currentSelection === "guest" ? (
                <GuestSelection adult={selectedAdult} child={selectedChild} onChangeAdult={handleChangeAdult} onChangeChild={handleChangeChild} />
              ) : null}
            </BrowserView>
          </div>
          <MobileView>
            {currentSelection === "city" ? <CitySelectionList onSelect={handleSelectCity} /> : null}
            {currentSelection === "guest" ? (
              <GuestSelection adult={selectedAdult} child={selectedChild} onChangeAdult={handleChangeAdult} onChangeChild={handleChangeChild} />
            ) : null}
          </MobileView>
          <div className="btnTop">
            <button className="btn-link" onClick={handleSearch}>
              <FontAwesomeIcon icon={faSearch} />
              &nbsp; Search
            </button>
          </div>
        </div>

        <div className="btnBottom">
          <button className="btn-link" onClick={handleSearch}>
            <FontAwesomeIcon icon={faSearch} />
            &nbsp; Search
          </button>
        </div>
      </div>
      <div className="bg" onClick={onClick}></div>
    </div>
  );
}

export default SearchOverlay;
