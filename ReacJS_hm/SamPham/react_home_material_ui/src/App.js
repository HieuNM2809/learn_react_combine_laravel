import { BrowserRouter as  Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Services from './components/Services';
import Login from './components/Login';
import Products from './components/Products';
import Nav from './components/Nav.js';
function App() {
  return (
    <>
       <Router>
          <Nav/>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/services' exact component={Services} />
            <Route path='/products' exact component={Products} />
            <Route path='/login' exact component={Login} />
          </Switch>
      </Router>
    </>
  );
}

export default App;
