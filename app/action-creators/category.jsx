import {FETCH_CASTLES_BY_CATEGORY} from '../constants'

export const loadCastlesByCategorySync = (castlesByCategory) => ({
    type: FETCH_CASTLES_BY_CATEGORY,
    castlesByCategory
})

