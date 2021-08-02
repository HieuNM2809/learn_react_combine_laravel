import './App.css';
import { BrowserRouter as  Router, Route, Switch } from 'react-router-dom';

import Home from './Components/Home.js';

function login(){
   return (
      <h1>Login</h1>
   );
}

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/home' exact component={Home} />
          <Route path='/login' exact component={login} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
