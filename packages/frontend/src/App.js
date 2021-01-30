import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Todo from './pages/Todo';

function App () {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to='/todo'>Todo</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path='/' component={Todo} />
        <Route path='/todo' component={Todo} />
      </Switch>
    </Router>
  );
}

export default App;
