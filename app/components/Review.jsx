import React from 'react'
import { connect } from 'react-redux'
import StarRating from 'react-star-rating';
import {sendNewReview} from '../reducers/review'
// get reviews from db
// user can add / delete / edit a review
export class Review extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      user_id: '',
      castle_id: '',
      subject: '',
      content: '',
      start: ''
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onFormSubmit(e) {
    const {user, oneCastle} = this.props
    e.preventDefault();
    const reviewInfo = {
      user_id: user.id,
      castle_id: oneCastle.id,
      subject: e.target.subject.value,
      content: e.target.content.value,
      star: parseInt(e.target.star.value)
    }
    console.log(reviewInfo)
    sendNewReview(reviewInfo)
    this.setState={
      subject: '',
      content: '',
      start: ''
    }
  }

// get reviews from db
// user can add / delete / edit a review


  render(){
    console.log('reviews', reviews)
    const {reviews} = this.props
    return(

      <div>
         <form className='well' onSubmit={this.onFormSubmit}>
          <div className='form-group row'>
              <div className='col-lg-1 col-lg-offset-2'>
                <label>Subject: </label>
                </div>
              <div className='col-lg-2'>
                <input className="form-control" name='subject'></input>
              </div>
              <div className='col-lg-1'>
                <label>Rating: </label>
              </div>
              <div className='col-lg-1'>
                <input className="form-control" name='star'></input>
              </div>
          </div>

            <div className='row'>
                  <div className='col-lg-1 col-lg-offset-2'>
                  <label>Content: </label>
                  </div>
                  <div className='col-lg-6'>
                  <textarea className="form-control" name='content' rows="3"></textarea>
                </div>
                <div className="col-lg-2">
                    <button className="btn btn-success" >Leave a Review</button>
                </div>
          </div>
        </form>


          {
            reviews && reviews.map((review, idx) => (
              <div className='row' key={idx}>
                <div className='col-lg-2 col-lg-offset-2'>{review.star}</div>
                <div className='col-lg-4'>{review.subject}</div>
                <div className='col-lg-12 col-lg-offset-2'>{review.content}</div>
              </div>
            ))
          }
      </div>
    )
  }
}


const mapState = ({reviews, user, oneCastle}) => ({reviews, user, oneCastle})

export default connect(mapState, null)(Review)

