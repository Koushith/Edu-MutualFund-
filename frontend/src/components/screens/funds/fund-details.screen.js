import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Message from '../../Message';
import Loader from '../../Loader';
import HistoricChart from '../../../components/fundDetails/historic.chart.component';
import DetailsHeading from '../../fundDetails/fundDetails-header.component';
import { fundDetail } from '../../../redux/actions/fundActions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import FundDescription from '../../fundDetails/fundDetails-desc.component';
import ProsAndCons from '../../fundDetails/fundDetails-pros.component';
import Returns from '../../fundDetails/fundDetails-returns.component';

function FundDetails({ history, match }) {
  const dispatch = useDispatch();
  const [error, setError] = useState('');

  const fund = useSelector((state) => state.fundDetail);
  const { loading, singleFund } = fund;

  useEffect(() => {
    const URI = match.params.id;
    dispatch(fundDetail(URI));
  }, [dispatch]);

  return (
    <>
      <Link to='/'>
        {' '}
        <Button variant='ghost'> - Go Back</Button>{' '}
      </Link>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          {singleFund !== undefined && (
            <>
              <Row className='mt-5'>
                <Col md={6}>
                  <DetailsHeading singleFund={singleFund} />
                </Col>

                <Col md={6}>
                  <Returns singleFund={singleFund} />
                </Col>
              </Row>

              <HistoricChart singleFund={singleFund} />

              <Col>
                <FundDescription singleFund={singleFund} />
              </Col>
              <ProsAndCons singleFund={singleFund} />
            </>
          )}
        </>
      )}
    </>
  );
}

export default FundDetails;
