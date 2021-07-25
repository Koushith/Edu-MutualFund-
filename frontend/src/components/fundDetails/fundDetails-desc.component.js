import React from 'react';

function FundDescription({ singleFund }) {
  console.log('from props', singleFund);
  return (
    <>
      <h3 className='mt-5'>{singleFund.metaData[0].heading}</h3>
      <p className='mt-3'>{singleFund.metaData[0].paragraph}</p>
    </>
  );
}

export default FundDescription;
