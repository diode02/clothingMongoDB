import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import CollectionOverViewContainer from "../../components/collectionOverview/collection-oveview.cont";
import CollectionPageContainer from "../collection/collection-oveview.cont";
import { fetchItemsStart } from "../../redux/shop/shop.actions";
const ShopPage = ({ fetchItemsStart, match: { path } }) => {
  useEffect(() => {
    fetchItemsStart();
  });
  return (
    <div>
      <Route exact path={`${path}`} component={CollectionOverViewContainer} />
      <Route
        exact
        path={`${path}/:collectionID`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

const mapDispatchtoProps = (dispatch) => ({
  fetchItemsStart: () => dispatch(fetchItemsStart()),
});
export default connect(null, mapDispatchtoProps)(ShopPage);
