import React from 'react'
import { connect } from 'react-redux'

// get reviews from db
// user can add / delete / edit a review
class Review extends React.Component {
  render(){
    console.log('reviews', reviews)
    const {reviews} = this.props
    return(
       <div className="row">
        <div className="col-md-12">
        {
          reviews && reviews.map((review, idx) => (
          <span key={idx}>{review.star}</span>
          <span key={idx}>{review.star}</span>
          // <span>{review.subject}</span>
          <span>{review.content}</span>
          ))
        }
          </div>
      </div>
    )
  }
}

const mapState = ({reviews}) => ({reviews})

export default connect(mapState, null)(Review)