import React from "react";
import { connect } from "react-redux";
import "./directory.scss";
import MenuItem from "../menuItem/menu-item.com";

const Directory = ({ collections }) => {
  return (
    <div className="directory-menu">
      {collections.map(({ _id, ...otherProps }) => (
        <MenuItem key={_id} {...otherProps}></MenuItem>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  collections: state.directory.collections,
});

export default connect(mapStateToProps)(Directory);
