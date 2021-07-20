import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import FundDetailScreen from './screens/FundDetailScreen';

function App(props) {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/fund/:id' component={FundDetailScreen} exact />
          <Route path='/login' component={LoginScreen} exact />
          <Route path='/reigster' component={RegisterScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
