import { BrowserRouter as  Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Login from './components/Login';
import Products from './components/Products';
import Nav from './components/Nav.js';
import EditProduct from './components/pages/EditProduct.js';
import DeleteProduct from './components/pages/DeleteProduct.js';
import AddProduct from './components/pages/AddProduct.js';
import Register from './components/pages/Register.js';
function App() {
  return (
    <>
       <Router>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/services'   component={Services} />

            <Route path='/products' exact component={Products} />
            <Route path="/products/edit/:id"   component={EditProduct} />
            <Route path="/products/delete/:id"  component={DeleteProduct} />
            <Route path="/products/add_product"  component={AddProduct} />

            <Route path='/login'   component={Login} />
            <Route path='/forgot-password'   component={Register} />
            <Route path='/sign-up'   component={Register} />
          </Switch>
      </Router>
    </>
  );
}

export default App;
