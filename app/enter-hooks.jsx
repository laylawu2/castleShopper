import {receiveAllCastles} from './action-creators/homepage'
import store from './store'

export const load = (castles) => {
  store.dispatch(receiveAllCastles(castles));
};

export const onHomeEnter = () => {
    fetch('/api/castles').then(res => res.json())
    .then(result => load(result))
}

