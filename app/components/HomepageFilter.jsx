'use strict';

import React from 'react';

export default (InnerComponent) => 
  class SearchFilter extends React.Component {
  
    constructor (props) {
      super(props);
      this.state = { filter: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleChangeCategory = this.handleChangeCategory.bind(this)
      // this.checkFilter = this.checkFilter.bind(this)
    }

    handleChange (evt) {
      const filter = evt.target.value.toLowerCase();
      this.setState({ filter });
    }
    handleChangeCategory (categoryName) {
      const filter = categoryName
      this.setState({ filter });
    }
    // checkFilter(allCastles,filter) {
    //         return allCastles.map(function(castle) {
    //           if (castle.name === filter) {
    //             return allCastles.filter(castle => castle.name.toLowerCase().match(filter))
    //           } else {
    //             allCastles.filter(castle => castle.category.toLowerCase().match(filter))
    //           }
    //         })
    // }

    render () {
      const { filter } = this.state;
      const { allCastles } = this.props;
      // const { checkFilter } = this.props;
      
      return (
        <InnerComponent 
          allCastles={
            filter ? 
            allCastles.filter(castle => castle.name.toLowerCase().match(filter)) : 
            allCastles
          }
          filter={filter} 
          handleChange={this.handleChange}
          handleChangeCategory={this.handleChangeCategory}
        />
      )
    }
};
