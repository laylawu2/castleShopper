import {receiveAllCastles} from './action-creators/homepage'
import {receiveCastle} from './action-creators/singlecastle'
import {userBids} from './action-creators/bid'
// import {loadCastlesByCategorySync} from './action-creators/category'
import {receiveCastleReviews } from './action-creators/singleCastleReviews'

import store from './store'
import {whoami} from './reducers/auth'

export const loadCastlesByCategory = (castles) => {
  store.dispatch()
}

export const loadCastles = (castles) => {
  store.dispatch(receiveAllCastles(castles));
};

export const loadCastle = (castle) => {
  store.dispatch(receiveCastle(castle));
}

export const loadCastleReviews = (reviews) => {
  console.log('reviews in loadCastleReviews', reviews)
  store.dispatch(receiveCastleReviews(reviews));
}

export const loadUserBids = (bids) => {
  store.dispatch(userBids(bids));
}

export const onHomeEnter = () => {
    fetch('/api/castles').then(res => res.json())
    .then(result => loadCastles(result))
}

export const getSingleCastle = ({params}) => {
  fetch('/api/castles/' + params.castleId)
  .then(res => res.json())
  .then(result => loadCastle(result))
}

export const getSingleCastleReviews = ({params}) => {
  fetch(`/api/reviews/${params.castleId}`)
  .then(res => res.json())
  .then(result => loadCastleReviews(result))
}

export const getReviewsForUser = ({params}) => {
  fetch('/api/reviews/' + params.userId)
    .then(res => res.json())

}
export const dispatchOnEnter = ({params}) => {
  store.dispatch(getBidsForUser(params.userId))
}

export const getBidsForUser = (userId) =>
dispatch => {
  console.log("INGETBIDSFORUSER")
  fetch('/api/bids/user/' + userId)
    .then(res => res.json())
    .then(result =>  {
      console.log("RESULT", result);
      dispatch(userBids(result));

    })
  }


