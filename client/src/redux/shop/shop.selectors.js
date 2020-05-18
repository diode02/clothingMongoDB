import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollectionsItems = createSelector(
  [selectShop],
  (shop) => shop.items
);
export const selectCollectionItems = (title) =>
  createSelector([selectCollectionsItems], (items) => {
    console.log();
    return items[0] ? items.filter((col) => col.title === title)[0].items : []; //geting items from whole db
  });
