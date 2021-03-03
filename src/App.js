import React from 'react';
import SearchForm from './components/SearchForm';
import UserProfile from './components/UserProfile';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bulma/css/bulma.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h2>Github Users With Forms</h2>
      </header>
      <Router>
        <Switch>
          <Route exact path='/'>
            <SearchForm />
          </Route>
          <Route path='/:username'>
            <UserProfile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
