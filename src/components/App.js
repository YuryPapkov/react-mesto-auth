import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Home from './Home';
import Login from './Login';
import Register from './Register';


function App() {
  const isLoggedIn = true;
  return (
    <div className="App">
      <div className="body">
        <BrowserRouter>
          <Switch>
            <Route path='/sign-up'>
              <Register />
            </Route>
            <Route path='/sign-in'>
              <Login />
            </Route>
            <ProtectedRoute path='/home' loggedIn={isLoggedIn} component={Home} />
            <Route>
              {isLoggedIn ? <Redirect to='/home' /> : <Redirect to='/sign-in' />};
        </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
