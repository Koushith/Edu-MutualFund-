import React from 'react';
import { Badge, Image } from 'react-bootstrap';
import Rating from '../Rating';

function DetailsHeading() {
  return (
    <>
      <Image src={`https://groww.in/images/partners/icici_groww.svg`} alt='name' fluid />
      <h3 className='mt-5'>ICICI Prudential Technology Direct Plan Growth</h3>

      <div>
        <Badge variant='success' style={{ marginRight: '4px' }}>
          Success
        </Badge>
        <Badge variant='success' style={{ marginRight: '4px' }}>
          Success
        </Badge>
        <Badge variant='success' style={{ marginRight: '4px' }}>
          Success
        </Badge>
        <Badge variant='success' style={{ marginRight: '4px' }}>
          Success
        </Badge>
      </div>
      <div className='mt-4'>
        <Rating value='rating' text={`5 reviews`} />
      </div>
    </>
  );
}

export default DetailsHeading;
