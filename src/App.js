import React, {Component} from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import './styles/styles.scss';
import {Home} from './components/home';
import {About} from './components/about';
import {Contact} from './components/contact';
import {Page404} from './components/404';
import {Layout} from './components/layout';
import { Navbarmenu } from './components/navbarmenu';
import { Jumbotron } from './components/jumbotron';

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Navbarmenu />
      <Jumbotron />
        <Layout>
          <Router>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/contact' component={Contact} />
              <Route component={Page404} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
