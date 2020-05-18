import React from "react";
import { connect } from "react-redux";
import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer,
} from "./collection.sty";

import Item from "../item/item.com";

import { selectCollectionItems } from "../../redux/shop/shop.selectors";

const Collection = ({ title, items }) => {
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title.toUpperCase()}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map((item) => (
          <Item key={item._id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  items: selectCollectionItems(ownProps.title)(state),
});

export default connect(mapStateToProps)(Collection);
