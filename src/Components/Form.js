import React from 'react';

const Form = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit} id='form'>
        <div className='col-sm-9 '>
          <label className='col-sm-3 col-form-label' amount='amount'>
            Enter Amount:
          </label>
          <input
            onChange={props.handleChange}
            value={props.amount}
            name='amount'
            type='number'
            placeholder='Enter Amount..'
          ></input>
        </div>
        <div className='col-sm-9 '>
          <label className='col-sm-3 col-form-label' date='date'>
            Enter Date:
          </label>
          <input
            onChange={props.handleChange}
            value={props.date}
            name='date'
            type='date'
          ></input>
        </div>
        <div className='col-sm-9 '>
          <label className='col-sm-3 col-form-label' location='location'>
            Enter Location:
          </label>
          <input
            onChange={props.handleChange}
            value={props.location}
            name='location'
            type='text'
            placeholder='Enter Location..'
          ></input>
        </div>
        <div className='col-sm-9 '>
          <label className='col-sm-3 col-form-label' description='description'>
            Enter Description:
          </label>
          <input
            onChange={props.handleChange}
            value={props.description}
            name='description'
            type='text'
            placeholder='Enter Description..'
          ></input>
        </div>
        <br></br>
        <div className='row'>
          <div className='col-sm-9  '>
            <button
              type='submit'
              value='Submit Expense'
              className='btn btn-primary submitButton'
              onSubmit={props.handleSubmit}
            >
              Submit Expense
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
