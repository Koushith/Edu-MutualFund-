import React from 'react';
import { Badge, Image } from 'react-bootstrap';
import Rating from '../Rating';

function DetailsHeading() {
  return (
    <>
      <Image src={'logo'} alt='logo' fluid />
      <h3 className='mt-5'>icicic</h3>

      <div>
        <Badge variant='success' style={{ marginRight: '4px' }}>
          dddd
        </Badge>
      </div>
      <div className='mt-4'>
        <Rating value={4} text={`Top Rated`} />
      </div>
    </>
  );
}

export default DetailsHeading;
