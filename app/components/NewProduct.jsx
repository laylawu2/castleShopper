import React from 'react';
import { connect } from'react-redux';


/* -----------------    COMPONENT     ------------------ */

export default class NewProduct extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      price: 0.00,
      location: '',
      imageUrl: '',
      size: 0,
      amenities: {},
      historyLink: '',
      category: []
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }
  render(){
    return(
    <form className='form-horizontal' onSubmit={(e)=>this.onFormSubmit(e)}>
      <fieldset className='well'>

          <div className='form-group'>
            <div className='row'>
                <div className='col-lg-offset-2'>
                  <legend>Add New Castle</legend>
                </div>
                <label className='col-lg-2 control-label col-lg-offset-2'>Name</label>
                </div>
                <div className='col-lg-6 col-lg-offset-4'>
                  <input className='form-control' name='name' type='name'></input>
                </div>
          </div>
          <div className='form-group'>
                     <div className='row'>
                         <label className='col-lg-2 control-label col-lg-offset-2'>Price</label>
                         </div>
                         <div className='col-lg-6 col-lg-offset-4'>
                           <input className='form-control' name='price'></input>
                         </div>
                   </div>
                   <div className='form-group'>
                     <div className='row'>
                         <label className='col-lg-2 control-label col-lg-offset-2'>Location</label>
                         </div>
                         <div className='col-lg-6 col-lg-offset-4'>
                           <input className='form-control' name='location'></input>
                         </div>
                   </div>
                   <div className='form-group'>
                     <div className='row'>
                         <label className='col-lg-2 control-label col-lg-offset-2'>ImageUrl</label>
                         </div>
                         <div className='col-lg-6 col-lg-offset-4'>
                           <input className='form-control' name='imageUrl'></input>
                         </div>
                   </div>
                   <div className='form-group'>
                     <div className='row'>
                         <label className='col-lg-2 control-label col-lg-offset-2'>Size</label>
                         </div>
                         <div className='col-lg-6 col-lg-offset-4'>
                           <input className='form-control' name='size'></input>
                         </div>
                   </div>
                   <div className='form-group'>
                     <div className='row'>
                         <label className='col-lg-2 control-label col-lg-offset-2'>Amenities</label>
                         </div>
                         <div className='col-lg-6 col-lg-offset-4'>
                           <input className='form-control' name='amenities'></input>
                         </div>
                   </div>
                   <div className='form-group'>
                     <div className='row'>
                         <label className='col-lg-2 control-label col-lg-offset-2'>Description</label>
                         </div>
                         <div className='col-lg-6 col-lg-offset-4'>
                           <input className='form-control' name='description'></input>
                         </div>
                   </div>
                   <div className='form-group'>
                     <div className='row'>
                         <label className='col-lg-2 control-label col-lg-offset-2'>History Link</label>
                         </div>
                         <div className='col-lg-6 col-lg-offset-4'>
                           <input className='form-control' name='historyLink'></input>
                         </div>
                   </div>
                   <div className='form-group'>
                     <div className='row'>
                         <label className='col-lg-2 control-label col-lg-offset-2'>Category</label>
                         </div>
                         <div className='col-lg-6 col-lg-offset-4'>
                           <input className='form-control' name='category'></input>
                         </div>
                   </div>
          <div className='form-group'>
            <div className='row'>
                <button type='submit' className='btn btn-success col-lg-offset-7' >Submit</button>
            </div>
          </div>

      </fieldset>
      </form>
    )
  }
  onFormSubmit(e) {
    e.preventDefault()
    console.log('this is a castle', e.target)
    const castleInfo = {
      name: e.target.name.value,
      // price: e.target.price.value,
      //location: e.target.location.value,
      // imageUrl: e.target.imageUrl.value,
      size: e.target.size.value,
      // amenities: e.target.amenities.value,
      //description: e.target.description.value,
      // historyLink: e.target.historyLink.value,
      // category: e.target.category.value
    }
    console.log('new castle info', castleInfo)
    const { addCastle } = this.props
    addCastle(castleInfo)
  }
}
