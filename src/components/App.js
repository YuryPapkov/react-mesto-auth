import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Home from './Home';
import Login from './Login';
import Register from './Register';


function App() {
  //const history = useHistory();
  //console.log(useHistory());
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [email, setEmail] = React.useState('');






  function handleLogin(email) {
    setIsLoggedIn(true);
    setEmail(email);
  }
  function handleLogout() {
    setIsLoggedIn(false);
    localStorage.removeItem('jwt');
    //history.push('/sign-in');
  }


  return (
    <BrowserRouter>
      <div className="App">
        <div className="body">
          <Switch>
            <Route path='/sign-up'>
              <Register />
            </Route>
            <Route path='/sign-in'>
              <Login handleLogin={handleLogin} />
            </Route>
            <ProtectedRoute path='/home' loggedIn={isLoggedIn} email={email} onLogout={handleLogout} component={Home} />
            <Route>
              {isLoggedIn ? <Redirect to='/home' /> : <Redirect to='/sign-in' />};
        </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
