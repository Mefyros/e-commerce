export const addToCart = payload => {
  return {
    type: "ADD_ITEM",
    payload,
  };
};

export const updateQuantity = payload => {
  return {
    type: "UPDATE_PRODUCT_QUANTITY",
    payload,
  };
};

export const deleteItem = payload => {
  return {
    type: "DELETE_ITEM",
    payload,
  }
}

export const clearCart = payload => {
  return {
    type: "CLEAR_CART",
    payload,
  }
}