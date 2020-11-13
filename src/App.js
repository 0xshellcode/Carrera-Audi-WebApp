import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Requirements from './components/pages/RequirementsPage';
import Offer from './components/pages/OfferPage';
import Employer from './components/pages/EmployerPage';
import Form from './components/Form/Form'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/requirements' component={Requirements} />
          <Route path='/offer' component={Offer} />
          <Route path='/employer' component={Employer} />
          <Route path='/form' component={Form} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
