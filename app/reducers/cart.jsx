'use strict';

const initialCart = [];

export default function cart (state = initalCart, action) {
  switch (action.type) {
    case "RECEIVE_CART": return action.cart;
    default: return state;
  }
}