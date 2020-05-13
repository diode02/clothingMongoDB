import React from "react";

import "./directory.scss";
import MenuItem from "../menuItem/menu-item.com";

const Directory = ({ collections }) => {
  return (
    <div className="directory-menu">
      {collections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps}></MenuItem>
      ))}
    </div>
  );
};

export default Directory;
