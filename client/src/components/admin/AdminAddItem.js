import React, { Component } from 'react';
import { Button, Input, Form, FormGroup, Label, Container, Alert } from 'reactstrap';
import axios from 'axios';

import Placeholder from '../../store/placeholder.png';

class AdminFormAddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalEdit: false,
      title: 'Test Shampoo',
      size: '8oz, 16oz',
      tags: 'Shampoo',
      images: {Placeholder},
      description: '',
      price: 0,
      success: false
    };
  }

  toggle = () => {
    this.setState({
      modalEdit: !this.state.modalEdit
    });
  }

  onSubmit = (title, price, size, tags, images, description) => {
    axios.post('/api/add/item', {
      title,
      price,
      size: (size.slice(0)+'').replace(/\s/g,'').split(','),
      tags: (tags.slice(0)+'').replace(/\s/g,'').split(','),
      images: (images.slice(0)+'').replace(/\s/g,'').split(','),
      description
    })
    .then(() => {
      window.location.reload(true)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  onChangeTitle = (e) => this.setState({title: e.target.value})
  onChangePrice = (e) => this.setState({price: e.target.value})
  onChangeSize = (e) => this.setState({size: e.target.value})
  onChangeTags = (e) => this.setState({tags: [e.target.value]})
  onChangeImages = (e) => this.setState({images: [e.target.value]})
  onChangeDescription = (e) => this.setState({ description: e.target.value })


  render() {
    const { title, price,  size, tags, images, description } = this.state
    return (
      <Container style={{paddingTop: '50px', paddingBottom:'50px'}}>
      <h1>Add new item</h1>
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Item's name</Label>
          <Input placeholder='example: shampoo' value={this.state.title} onChange={this.onChangeTitle} />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Price</Label>
          <Input placeholder='example: 20' value={this.state.price} onChange={this.onChangePrice} />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Size</Label>
          <Input placeholder='example: 8oz, 16oz, 24oz' value={this.state.size} onChange={this.onChangeSize} />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Category</Label>
          <Input placeholder='example: Shampoo & Conditioner' value={this.state.tags} onChange={this.onChangeTags} />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Images</Label>
          <Input placeholder='example: {Placeholder}' value={this.state.images} onChange={this.onChangeImages} />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Description</Label>
          <Input type="textarea" value={this.state.description} onChange={this.onChangeDescription} />
        </FormGroup>
      </Form>
      <Button onClick={()=>this.onSubmit(
        title, price, size, tags, images, description
        )}>Submit</Button>
      </Container>
    );
  }
}

export default AdminFormAddItem;