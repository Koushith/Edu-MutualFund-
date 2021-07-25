import React from 'react';
import { ListGroup, Col, Row } from 'react-bootstrap';

function ProsAndCons({ singleFund }) {
  return (
    <>
      <Row className='mt-5'>
        <Col>
          <ListGroup.Item>
            <h3>Pros</h3>
          </ListGroup.Item>
          {singleFund.pros.map((pro, index) => (
            <ListGroup.Item key={index}>{pro}</ListGroup.Item>
          ))}
        </Col>
        <Col>
          <ListGroup.Item>
            <h3>Cons</h3>
          </ListGroup.Item>
          {singleFund.cons.map((cons, index) => (
            <ListGroup.Item key={index}>{cons}</ListGroup.Item>
          ))}
        </Col>
      </Row>
    </>
  );
}

export default ProsAndCons;
