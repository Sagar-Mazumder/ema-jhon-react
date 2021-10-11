import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Erorr from './components/Erorr/Erorr';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Login from './components/login/Login';
import Order from './components/Order/Order';
import Placeorder from './components/Placeorder/Placeorder';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import Shipping from './components/Shipping/Shipping';
import Shop from './components/Shop/Shop';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div>
      <AuthProvider><Router>
        <Header></Header>

        <Switch>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/orders">
            <Order></Order>
          </Route>
          <Route path="/inventory">
            <Inventory></Inventory>
          </Route>
          <PrivateRoute path="/placeoreder">
            <Placeorder></Placeorder>
          </PrivateRoute>
          <PrivateRoute path="/shipping">
            <Shipping></Shipping>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="*">
            <Erorr></Erorr>
          </Route>
        </Switch>
      </Router></AuthProvider>
    </div>
  );
}

export default App;
