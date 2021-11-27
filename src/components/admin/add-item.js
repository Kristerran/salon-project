import React from 'react';
import { Button, Input, Form, FormGroup, Label, Container, Alert } from 'reactstrap';
import axios from 'axios';

class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalEdit: false,
            id: '',
            sku:'',
            name: '',
            manufacturer: '',
            category: '',
            size: '',
            price: '100',
            img: '',
            description: '',
            inventory: '#',
            success: false
        };
    }
    toggle = () => {
        this.setState({ modalEdit: !this.state.modalEdit });
    }
    onSubmit = (sku, name, category, price, img, description, inventory) => {
        axios.post('/api/add/item', {
            sku, name, manufacturer, category, size, price, img, description, inventory
        })
            .then(() => {
                window.location.reload(true)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    onChangeSku= (e) => this.setState({ sku: e.target.value })
    onChangeName= (e) => this.setState({ name: e.target.value })
    onChangeCategory = (e) => this.setState({ category: e.target.value })
    onChangeManufacturer = (e) => this.setState({ manufacturer: e.target.value })
    onChangeSize = (e) => this.setState({ size: e.target.value })
    onChangePrice = (e) => this.setState({ price: e.target.value })
    onChangeImg = (e) => this.setState({ img: e.target.value })
    onChangeDescription = (e) => this.setState({ description: e.target.value })
    onChangeInventory = (e) => this.setState({ inventory: e.target.value })

    render() {
        const { sku, name, category, size, price, img, description, inventory } = this.state
        return (
            <Container>
                <h1>Add New Item</h1>
                <Form>
                <FormGroup>
                        <Label for="product SKU">Product SKU</Label>
                        <Input placeholder="12345" value={this.state.sku} onChange={this.onChangeSku} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="product name">Product Name</Label>
                        <Input placeholder="Hydrate Conditioner" value={this.state.name} onChange={this.onChangeName} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="product category">Product Category</Label>
                        <Input placeholder="Shampoo & Conditioner" value={this.state.category} onChange={this.onChangeCategory} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="product size">Product Size</Label>
                        <Input placeholder="8 fl oz" value={this.state.size} onChange={this.onChangeSize} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="product price">Product Price</Label>
                        <Input placeholder="20" value={this.state.price} onChange={this.onChangePrice} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="image of product">Image of Product</Label>
                        <Input placeholder="image" value={this.state.img} onChange={this.onChangeImg} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="product description">Product Description</Label>
                        <Input placeholder="A deeply hydrating and color preserving conditioner for dry hair" value={this.state.description} onChange={this.onChangeDescription} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="product inventory">Number In Stock</Label>
                        <Input placeholder="1" value={this.state.inventory} onChange={this.onChangeInventory} />
                    </FormGroup>
                </Form>
                <Button onClick={() => this.onSubmit(sku, name, category, size, price, img, description, inventory)}>Submit</Button>
            </Container>
        );
    }
}

export default AddItem;


//source: https://github.com/NielsDom/ecommerce-react/blob/master/client/src/components/Admin-form-add-item.js