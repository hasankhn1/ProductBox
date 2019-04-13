import React, { Component } from 'react';

class Cart extends Component {

  emptyCart = () => {
    localStorage.setItem('cartItems', JSON.stringify([]))
    this.setState({})
  }
  
  render() {
    let data = JSON.parse(localStorage.getItem('cartItems'));
    return (
      <div className='row position-fixed cart float-right'>
        <div className='col-sm-12'>
        <span className="btn btn-sm pull-right" onClick={this.emptyCart}>Empty Cart</span>
          <span className="glyphicon glyphicon-shopping-cart pull-right">{data ? data.length : 0}</span>
        </div>
      </div>
    );
  }
}

export default Cart
