import React from 'react';
import Row from './Row';

const Table = (props) => {
  return (
    <div id='table' className='container'>
      <table className='table table-sm table-striped table-hover'>
        <thead>
          <tr>
            <th>Amount</th>
            <th>Date</th>
            <th>Location</th>
            <th>Description</th>
            <th>Delete?</th>
          </tr>
        </thead>
        <tbody>
          <Row expenses={props.expenses} handleDelete={props.handleDelete} />
        </tbody>
      </table>
    </div>
  );
};

export default Table;
