import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <Switch>
          <Route path="/about">
            <p>This is the about page.</p>
          </Route>
          <Route path="/">
            <p>This is the home page.</p>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;



