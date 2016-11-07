
import {NEW_BID_FOR_THIS_USER} from '../constants'


export const newBidForThisUser = (newBid) => ({
    type: NEW_BID_FOR_THIS_USER,
    newBid
})