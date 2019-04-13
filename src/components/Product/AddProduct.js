import React, { Component } from 'react';
import '../../App.css';
import { addItems } from '../../services/items'
import { isEmpty as _isEmpty  } from 'lodash'
import {
  Container, Form,
  Button, FormGroup, Label, Input
} from 'reactstrap';
import '../../App.css';

export default class AddProduct extends Component {
  state = {
    name: '',
    price: '',
    img: ''
  }
  addProductHandler = async () => {
    let { name, price } = this.state;
    if (_isEmpty(name) || _isEmpty(price)) {
      return;
    }
    const item = await addItems({
      name: this.state.name,
      price: this.state.price,
      img: this.state.img
    })
    const items = JSON.parse(localStorage.getItem('items'));
    items.push(item.data);
    localStorage.setItem('items', JSON.stringify(items))
    this.props.history.push('/items')
  }

  render() {
    return (
      <Container>
        <Form className="form">
          <div className='col-sm-12'>
            <FormGroup>
              <Label>Name: </Label><Input
                type="text"
                name="item"
                placeholder="Name"
                required
                onChange={(e) => this.setState({ name: e.target.value })}
              />
            </FormGroup>
          </div>
          <div className='col-sm-12'>
            <FormGroup>
              <Label>Price: </Label>
              <Input
                type="number"
                name="price"
                placeholder="Price"
                required
                onChange={(e) => this.setState({ price: e.target.value })}
              />
            </FormGroup>
          </div>
          <div className='col-sm-12'>
            <FormGroup>
              <Label>Image: </Label>
              <Input
                type="text"
                name="image"
                placeholder="Image"
                onChange={(e) => this.setState({ img: e.target.value })} />
            </FormGroup>
          </div>
          <Button onClick={this.addProductHandler}>Submit</Button>
        </Form>
      </Container >
    );
  }
}
