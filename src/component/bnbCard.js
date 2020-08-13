import React from "react";

function BnbCard({ bnb }) {
  return (
    <div className="bnbCard">
      <div className="photo" style={{ backgroundImage: `url(${bnb.photo})` }} alt={bnb.title} />
      <div className="infoBar">
        {bnb.superHost ? <div className="super">SUPER HOST</div> : null}
        <span className="type">
          {bnb.type}
          {bnb.beds != null ? " . " + bnb.beds + " beds" : null}
        </span>
        <div className="rating">
          <span className="star">&#9733;</span>
          <span className="point">{bnb.rating}</span>
        </div>
      </div>
      <div className="title">{bnb.title}</div>
    </div>
  );
}

export default BnbCard;
