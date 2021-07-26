import React, { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown, Form, Button, FormControl, Col } from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { logout } from '../redux/actions/userActions';
import { SearchContext } from '../redux/context/searchContext';

function Header() {
  const [search, setSearch] = useState('');
  const [filteredFunds, setFilteredFunds] = useState([]);
  console.log('filtered funds from header', filteredFunds);
  const { funds } = useSelector((state) => state.fundLists);

  const searchHandler = (e) => {
    e.preventDefault();
    const filtered = funds.filter((term) => term.name.toLowerCase().includes(search.toLowerCase()));

    setFilteredFunds(filtered);
  };

  // get obj from state
  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <SearchContext.Provider value='test'>
      <header>
        <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
          <Container>
            <LinkContainer to='/'>
              <Navbar.Brand>EDUFUND</Navbar.Brand>
            </LinkContainer>

            <Navbar.Toggle aria-controls='basic-navbar-nav' />

            <Form className='form-inline my-2 my-lg-0 ' onSubmit={searchHandler}>
              <Form.Control
                className='form-control mr-sm-2'
                type='text'
                placeholder='Search'
                aria-label='Search'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              ></Form.Control>

              <Button type='submit' variant='success'>
                Search
              </Button>
            </Form>

            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ml-auto'>
                {userInfo ? (
                  <NavDropdown title={userInfo.name} id='userName'>
                    <LinkContainer to='/profile'>
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>

                    <LinkContainer to='/addpost'>
                      <NavDropdown.Item>About</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/featurerequest'>
                      <NavDropdown.Item>Feature Request</NavDropdown.Item>
                    </LinkContainer>

                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <LinkContainer to='/login'>
                    <Nav.Link>
                      <i className='fas fa-user'></i>Sign In
                    </Nav.Link>
                  </LinkContainer>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </SearchContext.Provider>
  );
}

export default Header;
