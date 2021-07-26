import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { searchAction } from '../../redux/actions/fundActions';

function SearchFund() {
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  const searchHandler = (e) => {
    e.preventDefault();

    dispatch(searchAction(search));
    setSearch('');
  };
  return (
    <Form className='form-inline my-2 my-lg-0 ' onSubmit={searchHandler}>
      <Form.Control
        // className='form-control mr-sm-2'
        className='mr-sm-2 ml-sm-5'
        type='text'
        placeholder='Axis, hdfc, baroda'
        aria-label='Search'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></Form.Control>

      <Button type='submit' variant='success'>
        Search
      </Button>
    </Form>
  );
}

export default SearchFund;
