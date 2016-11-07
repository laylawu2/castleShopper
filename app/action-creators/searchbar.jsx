import {FETCH_CASTLE_BY_CATEGORY} from '../constants'

export const fetchCategorySync = (castlesByCategory) => ({
    type: FETCH_CASTLE_BY_CATEGORY,
    castlesByCategory
})

