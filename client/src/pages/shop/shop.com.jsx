import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import CollectionOverview from "../../components/collectionOverview/collection-overview.com";
import CollectionPage from "../collection/collection-page.com";
import { fetchItemsStart } from "../../redux/shop/shop.actions";
const ShopPage = ({ fetchItemsStart, match: { path } }) => {
  useEffect(() => {
    fetchItemsStart();
  });
  return (
    <div>
      {console.log("here also 1")}
      <Route exact path={`${path}`} component={CollectionOverview} />
      {console.log("here also 2")}
      <Route exact path={`${path}/:collectionID`} component={CollectionPage} />
      {console.log("here also 3")}
    </div>
  );
};

const mapDispatchtoProps = (dispatch) => ({
  fetchItemsStart: () => dispatch(fetchItemsStart()),
});
export default connect(null, mapDispatchtoProps)(ShopPage);
