import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import axios from 'axios';
import Rating from '../../Rating';
import Message from '../../Message';
import Loader from '../../Loader';
import HistoricChart from '../../../components/fundDetails/historic.chart.component';
import DetailsHeading from '../../fundDetails/fundDetails-header.component';

import { useDispatch, useSelector } from 'react-redux';
//import { funds } from '../../allFunds/funds';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import FundDescription from '../../fundDetails/fundDetails-desc.component';
import ProsAndCons from '../../fundDetails/fundDetails-pros.component';
import Returns from '../../fundDetails/fundDetails-returns.component';

function FundDetails({ history, match }) {
  const dispatch = useDispatch();

  const allFunds = useSelector((state) => state.fundLists);
  const { loading, funds, error } = allFunds;

  const URI = match.params.id;
  const funDetail = funds.find((fundID) => fundID.id === URI);
  console.log('filtered', funDetail);

  return (
    <>
      <Row className='mt-5'>
        <Col md={6}>
          <DetailsHeading />
        </Col>

        <Col md={6}>
          <Returns />
        </Col>
      </Row>

      <HistoricChart />

      <Col>
        <FundDescription />
      </Col>
      <ProsAndCons />
    </>

    // <>
    //   <Row className='mt-5'>
    //     <Col md={6}>
    //       <DetailsHeading />
    //     </Col>

    //     <Col md={6}>
    //       <Returns />
    //     </Col>
    //   </Row>

    //   <HistoricChart />

    //   <Col>
    //     <FundDescription />
    //   </Col>
    //   <ProsAndCons />
    // </>
  );
}

export default FundDetails;
