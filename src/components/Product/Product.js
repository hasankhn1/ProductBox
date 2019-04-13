import React, { Component } from 'react';
import { connect } from 'react-redux'
import Aux from '../../hoc/Aux'
import Cart from '../Cart/Cart'
import {
  sortBy as _sortBy, each as _each,
} from 'lodash'
import {
  Container
} from 'reactstrap';
import '../../App.css';
import { getItemsFromServer } from '../../actions/actions'
class Product extends Component {

  addItemsToCart(item) {
    const items = JSON.parse(localStorage.getItem('cartItems')) || [];
    items.push(item);
    localStorage.setItem('cartItems', JSON.stringify(items))
    this.setState({})
  }
  removeItemsFromCart(item) {
    let items = JSON.parse(localStorage.getItem('cartItems'))
    if (items.length) {
      let itemToRemove = -1;
      _each(items, (i, index) => {
        if (i.id === item.id) {
          itemToRemove = index
        }
      })
      if (itemToRemove !== -1) {
        items.splice(itemToRemove, 1)
        localStorage.setItem('cartItems', JSON.stringify(items))
        this.setState({})
      }
    }
  }


  render() {
    let data = JSON.parse(localStorage.getItem('items'));
    data = _sortBy(data, 'name')
    return (
      <Aux>
        <Cart></Cart>
        <Container>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Image</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.map(d => {
                return (
                  <tr key={d.id}>
                    <td>{d.name}</td>
                    <td>{d.price}</td>
                    <td><img height="50px" width="50px" alt='img' src={d.img} /></td>
                    <td><button type="button" className="btn btn-primary btn-sm" onClick={() => { this.addItemsToCart(d) }}>Add</button></td>
                    <td><button type="button" className="btn btn-danger btn-sm" onClick={() => { this.removeItemsFromCart(d) }}>Remove</button></td>
                  </tr>
                )
              })
              }
            </tbody>
          </table>

        </Container>
      </Aux>
    );
  }
}

const mapStateToProps = (state) => state
const mapDispatchToProps = {
  getItemsFromServer
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
