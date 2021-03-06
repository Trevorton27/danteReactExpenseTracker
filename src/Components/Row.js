import React from 'react';

const Row = (props) => {
  return props.expenses.map((expense) => {
    return (
      <tr key={expense.id}>
        <td>{expense.amount}</td>
        <td>{expense.date}</td>
        <td>{expense.location}</td>
        <td>{expense.description}</td>
        <td>
          <button
            onClick={() => props.handleDelete(expense.id)}
            className='btn btn-danger align-middle btn-sm'
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });
};

export default Row;
