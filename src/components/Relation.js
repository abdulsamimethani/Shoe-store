import React from 'react';
import { BrowserRouter as Router,Switch, Route,} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Product from './Product';
import Productitem from './Productitem';
import Navbar from './Navbar';
import Feedback from './Feedback';

function Relation() {
    return (
      <Router>
          <Navbar />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/About' component={About} />
              <Route exact path='/product' component={Product} />
              <Route  path='/feedback' component={Feedback} />
              <Route path='/product/:id' component={Productitem} />
          </Switch>
      </Router>
    );
}

export default Relation;