import React, { useState, useEffect } from 'react';

import axios from 'axios';
import Rating from '../../Rating';
import Message from '../../Message';
import Loader from '../../Loader';
import HistoricChart from '../../../components/fundDetails/historic.chart.component';
import DetailsHeading from '../../fundDetails/fundDetails-header.component';

import { useDispatch, useSelector } from 'react-redux';
// import { listProductDetails } from '../actions/productActions';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import FundDescription from '../../fundDetails/fundDetails-desc.component';
import ProsAndCons from '../../fundDetails/fundDetails-pros.component';

function FundDetails({ history, match }) {
  const loading = false;
  const error = undefined;
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row className='mt-5'>
            <Col md={6}>
              <DetailsHeading />
            </Col>

            <Col md={3}>
              <h3>120% Returns</h3> <span>in 1year</span>
            </Col>
          </Row>

          <HistoricChart />

          <Col>
            <FundDescription />
          </Col>
          <ProsAndCons />
        </>
      )}
    </>
  );
}

export default FundDetails;
