import React from 'react';

function Returns({ singleFund }) {
  return (
    <div style={{ textAlign: 'right' }}>
      <h3>{singleFund.oneYearReturns} Returns </h3> <span>in 1year</span>
    </div>
  );
}

export default Returns;
