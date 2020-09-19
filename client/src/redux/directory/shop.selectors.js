import { createSelector } from "reselect";

const selectDirectory = (state) => state.directory;

// export const selectCollectionsItems = createSelector(
//   [selectShop],
//   (shop) => shop.items
// );
// export const selectCollectionItems = (title) =>
//   createSelector([selectCollectionsItems], (items) => {
//     console.log();
//     return items[0] ? items.filter((col) => col.title === title)[0].items : []; //geting items from whole db
//   });

export const selectIsDirectoryFetching = createSelector(
  [selectDirectory],
  (directory) => directory.isFetching
);
