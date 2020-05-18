import React from "react";
import Collection from "../../components/collectionPage/collection.com";

const CollectionPae = ({ match }) => {
  return (
    <div>
      <Collection title={match.params.collectionID} />
    </div>
  );
};

export default CollectionPae;
