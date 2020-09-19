import React from "react";
import "./menu-item.sty.scss";

import { withRouter } from "react-router-dom";
const MenuItem = ({ title, imageUrl, size, routeName, history, match }) => {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}shop/${routeName}`)}
    >
      <div
        className="background-image"
        style={{
          background: `url(${imageUrl}
          )`,
          backgroundSize: "cover",
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
