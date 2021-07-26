import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import FeatureRequest from './components/screens/featureRequest/feature-request.screen';
import HomeScreen from './components/screens/home/home.screen';
import ProfileScreen from './components/screens/profile/ProfileScreen';

import Header from './components/common/Header';
import Footer from './components/common/Footer';
import LoginScreen from './components/screens/authScreens/login.screen';
import RegisterScreen from './components/screens/authScreens/register.screen';
import FundDetails from './components/screens/funds/fund-details.screen';

function App() {
  return (
    <>
      <Router>
        <Header />
        <main className='py-3'>
          <Container>
            <Route path='/' exact component={HomeScreen} />

            <Route path='/featurerequest' exact component={FeatureRequest} />
            <Route path='/profile' exact component={ProfileScreen} />
            <Route path='/fund/:id' component={FundDetails} />
            <Route path='/login' exact component={LoginScreen} />
            <Route path='/register' exact component={RegisterScreen} />
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
