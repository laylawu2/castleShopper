import React from 'react';
import { connect } from'react-redux';


/* -----------------    COMPONENT     ------------------ */

export default class NewProduct extends React.Component {
  render(){
    return(
      <fieldset className='well'>
        <form className='form-horizontal'>
          <div className='form-group'>
            <div className='row'>
                <div className='col-lg-offset-2'>
                  <legend>Add New Castle</legend>
                </div>
                <label className='col-lg-2 control-label col-lg-offset-2'>Name</label>
                </div>
                <div className='col-lg-6 col-lg-offset-4'>
                  <input className='form-control'></input>
                </div>
          </div>
          <div className='form-group'>
            <div className='row'>
                <label className='col-lg-2 control-label col-lg-offset-2'>Price</label>
                </div>
                <div className='col-lg-6 col-lg-offset-4'>
                  <input className='form-control'></input>
                </div>
          </div>
          <div className='form-group'>
            <div className='row'>
                <label className='col-lg-2 control-label col-lg-offset-2'>Location</label>
                </div>
                <div className='col-lg-6 col-lg-offset-4'>
                  <input className='form-control'></input>
                </div>
          </div>
          <div className='form-group'>
            <div className='row'>
                <label className='col-lg-2 control-label col-lg-offset-2'>ImageUrl</label>
                </div>
                <div className='col-lg-6 col-lg-offset-4'>
                  <input className='form-control'></input>
                </div>
          </div>
          <div className='form-group'>
            <div className='row'>
                <label className='col-lg-2 control-label col-lg-offset-2'>Size</label>
                </div>
                <div className='col-lg-6 col-lg-offset-4'>
                  <input className='form-control'></input>
                </div>
          </div>
          <div className='form-group'>
            <div className='row'>
                <label className='col-lg-2 control-label col-lg-offset-2'>Amenities</label>
                </div>
                <div className='col-lg-6 col-lg-offset-4'>
                  <input className='form-control'></input>
                </div>
          </div>
          <div className='form-group'>
            <div className='row'>
                <label className='col-lg-2 control-label col-lg-offset-2'>Description</label>
                </div>
                <div className='col-lg-6 col-lg-offset-4'>
                  <input className='form-control'></input>
                </div>
          </div>
          <div className='form-group'>
            <div className='row'>
                <label className='col-lg-2 control-label col-lg-offset-2'>History Link</label>
                </div>
                <div className='col-lg-6 col-lg-offset-4'>
                  <input className='form-control'></input>
                </div>
          </div>
          <div className='form-group'>
            <div className='row'>
                <label className='col-lg-2 control-label col-lg-offset-2'>Category</label>
                </div>
                <div className='col-lg-6 col-lg-offset-4'>
                  <input className='form-control'></input>
                </div>
          </div>
          <div className='form-group'>
            <div className='row'>
                <button className='btn btn-success col-lg-offset-7'>Submit</button>
            </div>

          </div>
        </form>
      </fieldset>
    )
  }
}
