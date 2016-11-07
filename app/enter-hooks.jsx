import {receiveAllCastles} from './action-creators/homepage'
import {receiveCastle} from './action-creators/singlecastle'

import store from './store'
import {whoami} from './reducers/auth'

export const loadCastles = (castles) => {
  store.dispatch(receiveAllCastles(castles));
};

export const loadCastle = (castle) => {
  store.dispatch(receiveCastle(castle));
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





// export const onSearchEnter = (nextRouterState) => {
//     const categoryName = nextRouterState.params.categoryName
//     const thunk = searchWord(categoryName)
//     store.dispatch(thunk)
// }


