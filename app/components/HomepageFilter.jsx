'use strict';

import React from 'react';

export default (InnerComponent) => 
  class SearchFilter extends React.Component {
  
    constructor (props) {
      super(props);
      this.state = { filter: '' };
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange (evt) {
      const filter = evt.target.value.toLowerCase();
      this.setState({ filter });
    }

    render () {
      const { filter } = this.state;
      const { allCastles } = this.props;
      
      return (
        <InnerComponent 
          allCastles={
            filter ? 
            allCastles.filter(castle => castle.name.toLowerCase().match(filter)) : 
            allCastles
          }
          filter={filter} 
          handleChange={this.handleChange}
        />
      )
    }
};
