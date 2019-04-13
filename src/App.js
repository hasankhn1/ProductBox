import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';
import Product from './components/Product/Product';
import AddProduct from './components/Product/AddProduct';
import Checkout from './components/Checkout/Checkout';
import { connect } from 'react-redux'
import { getItemsFromServer } from './actions/actions';
class App extends Component {
  async componentDidMount() {
    await this.props.getItemsFromServer();
  }
  render() {
    return (
      <div className="bg-home">
        <div className="upper-heading">
          <h3>Product Box Challenge</h3>
          <h1>Welcome To Rando Store</h1>
        </div>
        <Router>
          <ul>
            <li className='text-decoration-none'>
              <Link to="/add">Put Items Up For Sale</Link>
            </li>
            <li>
              <Link to="/items">Browser Our Items!</Link>
            </li>
            <li>
              <Link to="/checkout">CheckOut</Link>
            </li>
          </ul>
          <Route exact path="/add" component={AddProduct} />
          <Route exact path="/items" component={Product} />
          <Route exact path="/checkout" component={Checkout} />
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => state
const mapDispatchToProps = {
  getItemsFromServer
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
