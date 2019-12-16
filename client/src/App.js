import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

//Pages
import Account from './pages/Account/Account'
import NotFound from './pages/NotFound/NotFound'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ Account } />
        <Route path="/account" exact component={ Account } />
        <Route path="/NotFound" component={ NotFound } />
        <Redirect to="/NotFound"/>
      </Switch>
    </Router>
  );
}

export default App;
