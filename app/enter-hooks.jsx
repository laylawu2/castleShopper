import {receiveAllCastles} from './action-creators/homepage'
import store from './store'
import {whoami} from './reducers/auth'

export const load = (castles) => {
  store.dispatch(receiveAllCastles(castles));
};

export const onHomeEnter = () => {
    fetch('/api/castles').then(res => res.json())
    .then(result => load(result))
    store.dispatch(whoami())
}



// export const onSearchEnter = (nextRouterState) => {
//     const categoryName = nextRouterState.params.categoryName
//     const thunk = searchWord(categoryName)
//     store.dispatch(thunk)
// }

