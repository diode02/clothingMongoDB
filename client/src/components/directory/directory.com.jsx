import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./directory.scss";
import MenuItem from "../menuItem/menu-item.com";

import { fetchCollectionStart } from "../../redux/directory/directory.actions";

const Directory = ({ fetchCollectionStart, collections }) => {
  useEffect(() => {
    fetchCollectionStart();
  }, [fetchCollectionStart]);

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

const mapDispatchtoProps = (dispatch) => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart()),
});

export default connect(mapStateToProps, mapDispatchtoProps)(Directory);
