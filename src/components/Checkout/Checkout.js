import React, { Component } from 'react';
import {sortBy as _sortBy, sumBy as _sumBy } from 'lodash'
class CheckOut extends Component {

  emptyCart = () => {
    localStorage.setItem('cartItems', JSON.stringify([]))
    this.setState({})
  }

  render() {
    let data = JSON.parse(localStorage.getItem('cartItems'));
    data = _sortBy(data, 'name')
    if (!data.length) {
      return (
        <div>
          No Items Added
        </div>
      )
    }
    return (
      <div className='container'>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => {
            return (
              <tr key={i}>
                <td>{d.name}</td>
                <td>{d.price}</td>
                <td><img height="50px" width="50px" alt='img' src={d.img} /></td>
              </tr>
            )
          })
          }
        </tbody>
      </table>
      <div className='row mt-4'>
        <p>Total Price: {_sumBy(data,(p)=> parseInt(p.price))}</p>
      </div>
      </div>
    );
  }
}

export default CheckOut
