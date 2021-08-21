// import stuff to call some stuff
import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import {TaskList} from './Task';
import { EditList } from './Edit';
import { CreateList } from './Create';

import './App.css';



function App() {
  return (
    <div>
      <nav className="navbar bg-light navbar-expand-lg navbar-light">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">Tasks</Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">Create Task</Link>
            </li>
          </ul>
      </nav>
      <Switch>
        <Route path="/" component={TaskList} exact/>
        <Route path="/edit:/id" component={EditList} />
        <Route  path="/create" component={CreateList} />

      </Switch>
    </div>
  );
}

export default App;
