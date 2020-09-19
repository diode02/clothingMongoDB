import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { fetchCollectionStart } from "../../redux/directory/directory.actions";
import HomePageContainerSpinner from "./homePage-cont";

const HomePageRedirectCom = ({ fetchCollectionStart, match: { path } }) => {
  useEffect(() => {
    fetchCollectionStart();
  }, [fetchCollectionStart]);
  return (
    <div>
      <Route exact path={`${path}`} component={HomePageContainerSpinner} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart()),
});
export default connect(null, mapDispatchToProps)(HomePageRedirectCom);
