import React from "react";
import Item from "../item/item.com";
import "./colection-preview.sty.scss";
const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <Item key={item._id} item={item}></Item>
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
