import {receiveAllCastles} from './action-creators/homepage'
import {receiveCastle} from './action-creators/singlecastle'

import store from './store'

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
  fetch('/api/castles/' + params.id)
  .then(res => res.json())
  .then(result => loadCastle(result))
}
