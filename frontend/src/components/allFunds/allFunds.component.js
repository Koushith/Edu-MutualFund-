import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getAllFunds } from '../../redux/actions/fundActions';
import Loader from '../common/Loader';
import Message from '../common/Message';
import Rating from '../common/Rating';

function AllFunds() {
  const dispatch = useDispatch();

  const allFunds = useSelector((state) => state.fundLists);
  const { loading, funds, error } = allFunds;

  const { searchResults, loading: load } = useSelector((state) => state.searchResult);

  console.log('search result', searchResults, load);

  useEffect(() => {
    dispatch(getAllFunds());
  }, [dispatch]);

  return (
    <>
      {load ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {searchResults !== undefined &&
              searchResults.map((fund) => (
                <>
                  {' '}
                  <h1>Search Results</h1>
                  <Col sm={6} sm={12} md={6} key={fund.id}>
                    <Card className='my-3 p-3 rounded'>
                      <Link to={`/fund/${fund.id}`}>
                        <Card.Img src={fund.logo} variant='top' style={{ width: '100px' }} />
                      </Link>
                      <Card.Text as='div' className='mt-2'>
                        <Rating value={fund.rating} />
                      </Card.Text>
                      <Card.Body className='p-0 mt-2'>
                        <Link to={`/fund/${fund.id}`}>
                          <Card.Title as='div'>
                            <strong>{fund.name}</strong>
                          </Card.Title>
                        </Link>
                      </Card.Body>
                    </Card>
                  </Col>
                </>
              ))}
          </Row>
        </>
      )}

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <h1>Top Performing Funds</h1>
          <Row>
            {funds !== undefined &&
              funds.map((fund) => (
                <Col sm={6} sm={12} md={6} key={fund.id}>
                  <Card className='my-3 p-3 rounded'>
                    <Link to={`/fund/${fund.id}`}>
                      <Card.Img src={fund.logo} variant='top' style={{ width: '100px' }} />
                    </Link>
                    <Card.Text as='div' className='mt-2'>
                      <Rating value={fund.rating} />
                    </Card.Text>
                    <Card.Body className='p-0 mt-2'>
                      <Link to={`/fund/${fund.id}`}>
                        <Card.Title as='div'>
                          <strong>{fund.name}</strong>
                        </Card.Title>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>
        </>
      )}
    </>
  );
}

export default AllFunds;
