import React from 'react'


export default ({searchWord}) => {
    console.log('....',searchWord)
    return (
        <form onSubmit={evt => {
        evt.preventDefault()
        this.props.searchWord(evt.target.usersearchword.value)
    } } className="navbar-form navbar-left" role="search">
            <div className="form-group">
                <input name="usersearchword" type="text" className="form-control" placeholder="Search" />
            </div>
            <button type="submit" className="btn btn-default">Search</button>
        </form>
    )
}