
import {NEW_BID_FOR_THIS_USER} from '../constants'
import {USER_BIDS} from '../constants'


export const newBidForThisUser = (newBid) => ({
    type: NEW_BID_FOR_THIS_USER,
    newBid
})

export const userBids = (userBids) => ({
    type: USER_BIDS, 
    userBids
})