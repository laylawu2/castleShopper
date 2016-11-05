import React from 'react'

export const Search = ({search}) => {
  console.log('......search:',search)
  return (

    <form onSubmit={evt => {
    search(evt.target.searchword.value)
  } }>
    <input name="searchword" placeholder="Search" />
    <input type="submit" value="Search" />
  </form>)
}

import {search} from 'APP/app/reducers/searchbar'
import {connect} from 'react-redux'



export default connect (
  null,
  {search},
) (Search)
