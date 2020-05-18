import React from "react";
import CollectionPreview from "../collectionPreview/collection-preview.com";
import { connect } from "react-redux";

const CollectionOverview = ({ items }) => {
  return (
    <div className="shop-collection">
      {items.map(({ _id, ...otherProps }) => (
        <CollectionPreview key={_id} {...otherProps}></CollectionPreview>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  items: state.shop.items,
});

export default connect(mapStateToProps)(CollectionOverview);
