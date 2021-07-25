import React from 'react';
import { Badge, Image } from 'react-bootstrap';
import Rating from '../Rating';

function DetailsHeading({ singleFund }) {
  return (
    <>
      <Image src={singleFund.logo} alt='logo' fluid />
      <h3 className='mt-5'>{singleFund.name}</h3>

      <div>
        {singleFund.fundType.map((badge, index) => (
          <Badge variant='success' style={{ marginRight: '4px' }} key={index}>
            {badge}
          </Badge>
        ))}
      </div>
      <div className='mt-4'>
        <Rating value={singleFund.rating} text={`Top Rated`} />
      </div>
    </>
  );
}

export default DetailsHeading;
