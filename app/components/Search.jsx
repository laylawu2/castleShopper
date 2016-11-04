import React from 'react'
import axios from 'axios'

export const Search = ({}) => {
  return (

    <form onSubmit={evt => {
        evt.preventDefault()
        searchWord(evt.target.searchword.value)
    } } className="navbar-form navbar-left" role="search">
            <div className="form-group">
                <input name="searchword" type="text" className="form-control" placeholder="Search" />
            </div>
            <button type="submit" className="btn btn-default">Search</button>
        </form>
    )
}

export const FETCH_CASTLE_BY_CATEGORY = 'FETCH_CASTLE_BY_CATEGORY'

export const fetchCategorySync = (castlesByCategory) => ({
    type: FETCH_CASTLE_BY_CATEGORY,
    castlesByCategory
})


export const searchWord = (searchword) =>
  dispatch => 
    axios.get('/api/castles/:searchword')
      .then(() => dispatch(fetchCategorySync(searchword)))
      .catch(() => dispatch(fetchCategorySync(searchword))) 



//connect

// export const Search = ({}) => {
//   return (

//     <form onSubmit={evt => {
//         evt.preventDefault()
//         searchWord(evt.target.searchword.value)
//     } } className="navbar-form navbar-left" role="search">
//             <div className="form-group">
//                 <input name="searchword" type="text" className="form-control" placeholder="Search" />
//             </div>
//             <button type="submit" className="btn btn-default">Search</button>
//         </form>
//     )
// }
