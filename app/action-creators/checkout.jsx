import React from 'react';
import axios from 'axios';

import {BUY_CASTLE} from '../constants'
// import axios from 'axios'
 

//homepage action creator to be used in thunk
const receiveCastle = (castle) => ({
    type: BUY_CASTLE,
    purchased: 'paid'
});


export const buyCastle = castleId => (dispatch, getState) => {
	let { castleBought, buyer } = getState();

	return axios.put(`/api/bid/${castleBought.id}`, {
		purchased: 'paid'

	})
	.then(res => res.json())
	.then(castle => receiveCastle(castle))
	.then(console.error);
}