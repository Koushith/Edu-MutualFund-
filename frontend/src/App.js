import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import FeatureRequest from './components/screens/FeatureRequest';
import HomeScreen from './components/screens/HomeScreen';
import ProfileScreen from './components/screens/ProfileScreen';

import Header from './components/Header';
import Footer from './components/Footer';
import LoginScreen from './components/screens/LoginScreen';
import RegisterScreen from './components/screens/RegisterScreen';
import FundDetails from './components/screens/funds/fund-details.screen';

function App() {
  return (
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
  );
}

export default App;
