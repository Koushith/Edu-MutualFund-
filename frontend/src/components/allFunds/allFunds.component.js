import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getAllFunds } from '../../redux/actions/fundActions';
import Loader from '../Loader';
import Message from '../Message';
import { funds, users } from './funds';

function AllFunds() {
  return (
    <>
      <h1>Top Performing Funds</h1>
      {funds.map((fund) => (
        <Card className='my-3 p-3 rounded'>
          <Link to={`/fund/${fund.id}`}>
            <Card.Img src={fund.logo} variant='top' />
          </Link>

          <Card.Body>
            <Link to={`/fund/${fund.id}`}>
              <Card.Title as='div'>
                <strong>{fund.name}</strong>
              </Card.Title>
            </Link>

            <Card.Text as='div'>
              {/* <Rating
                 value={fund.rating}
                 text={`${product.numReviews} reviews`}
               /> */}
            </Card.Text>

            {/* <Card.Text as='h3'>${product.price}</Card.Text> */}
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default AllFunds;
