import React, { useState, useEffect } from "react";
import data from "../data/stays.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

function CitySelectionList({ onSelect }) {
  const [cityList, setCityList] = useState([]);

  useEffect(() => {
    const clist = [];
    for (const bnb of data) {
      if (!clist.includes(bnb.city)) clist.push(bnb.city);
    }
    setCityList(clist);
  }, []);

  return (
    <div className="citySelection selection">
      <ul>
        {cityList.map((city) => (
          <li key={cityList.indexOf(city)} onClick={() => onSelect(city)}>
            <span className="icon">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </span>
            {city}, Finland
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CitySelectionList;
