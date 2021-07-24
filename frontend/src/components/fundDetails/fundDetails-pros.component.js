import React from 'react';
import { ListGroup, Col, Row } from 'react-bootstrap';

function ProsAndCons() {
  return (
    <>
      <Row className='mt-5'>
        <Col>
          <ListGroup.Item>
            <h3>Pros</h3>
          </ListGroup.Item>
          <ListGroup.Item>'1Y Returns are higher than the category average returns',</ListGroup.Item>
          <ListGroup.Item>'1Y Returns are higher than the category average returns',</ListGroup.Item>
          <ListGroup.Item>'1Y Returns are higher than the category average returns',</ListGroup.Item>
          <ListGroup.Item>'1Y Returns are higher than the category average returns',</ListGroup.Item>
        </Col>
        <Col>
          <ListGroup.Item>
            <h3>Cons</h3>
          </ListGroup.Item>

          <ListGroup.Item>'1Y Returns are higher than the category average returns',</ListGroup.Item>
        </Col>
      </Row>
    </>
  );
}

export default ProsAndCons;
