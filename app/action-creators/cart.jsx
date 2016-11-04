'use strict';

export const receiveCart = cart => ({
  type: "RECEIVE_CART",
  cart 
});

export const fetchAndGoToCart = cartId => 
  dispatch => 
    fetch(`/api/cart/${cartId}`)
      .then(res => res.json())
      .then(album => dispatch(receiveCart(album)));