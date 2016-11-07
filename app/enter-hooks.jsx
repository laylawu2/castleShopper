import {receiveAllCastles} from './action-creators/homepage'
import {receiveCastle} from './action-creators/singlecastle'
// import {loadCastlesByCategorySync} from './action-creators/category'

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

export const onHomeEnter = () => {
    fetch('/api/castles').then(res => res.json())
    .then(result => loadCastles(result))
}

export const getSingleCastle = ({params}) => {
  fetch('/api/castles/' + params.castleId)
  .then(res => res.json())
  .then(result => loadCastle(result))
}

// export const onCategoryEnter = ({params}) => {
//   fetch('/api/castles/search' + params)
//   .then(res => res.json())
//   .then(result => loadCastlesByCategorySync(result))
// }

// export const onSearchEnter = (nextRouterState) => {
//     const categoryName = nextRouterState.params.categoryName
//     const thunk = searchWord(categoryName)
//     store.dispatch(thunk)
// }


