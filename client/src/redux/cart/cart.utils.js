export const addItemToCart = (cartItems, newitem) => {
  const existingItem = cartItems.find((item) => item._id === newitem._id);

  if (existingItem) {
    return cartItems.map((item) =>
      item._id === newitem._id
        ? { ...newitem, customerQuantity: item.customerQuantity + 1 }
        : item
    );
  }

  return [...cartItems, { ...newitem, customerQuantity: 1 }];
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
  const existingItem = cartItems.find((item) => item._id === itemToRemove._id);
  if (existingItem.customerQuantity === 1)
    return cartItems.filter((item) => item._id !== itemToRemove._id);

  return cartItems.map((item) =>
    item._id === itemToRemove._id
      ? { ...itemToRemove, customerQuantity: itemToRemove.customerQuantity - 1 }
      : item
  );
};

export const selectTotal = (cartItem) => {
  let total = 0;
  cartItem.map((item) => (total = total + item.customerQuantity * item.price));
  return total;
};

export const selectTotalItems = (cartItems) => {
  let total = 0;
  cartItems.map((item) => (total = total + item.customerQuantity));
  return total;
};
