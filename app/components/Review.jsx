import React from 'react'
import { connect } from 'react-redux'

// get reviews from db
// user can add / delete / edit a review
export default class Review extends React.Component {
  render(){
    console.log('reviews', reviews)
    const {reviews} = this.props
    return(
       <div className="row">
        <div className="col-md-12">
          
        {
          
          reviews && reviews.map((review, idx) => (
        <div>  
          <span key={idx}>{review.star}</span>
          <span key={idx}>{review.star}</span>
          
          <span>{review.content}</span>
        </div>
          )
          )
        
        }
        
          </div>
      </div>
    )
  }
}

