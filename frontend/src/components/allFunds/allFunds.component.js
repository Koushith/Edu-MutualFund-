import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getAllFunds } from '../../redux/actions/fundActions';
import Loader from '../Loader';
import Message from '../Message';
// import { funds, users } from './funds';

function AllFunds() {
  const dispatch = useDispatch();

  const allFunds = useSelector((state) => state.fundLists);
  const { loading, funds, error } = allFunds;

  useEffect(() => {
    dispatch(getAllFunds());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          {funds !== undefined &&
            funds.map((fund) => (
              <div key={fund.id}>
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
              </div>
            ))}
        </>
      )}
    </>
  );
}

export default AllFunds;
