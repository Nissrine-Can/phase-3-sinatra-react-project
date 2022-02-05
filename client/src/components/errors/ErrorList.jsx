import React from 'react';
import Error from './Error';
const ErrorList = ({ errors }) => {

    const errorCards = errors.map((error, idx) => <Error error={ error } key= { idx } />)
  return (
    <div>
       <ul className="error">
           {errorCards}
       </ul>
    </div>
  )
}

export default ErrorList;
