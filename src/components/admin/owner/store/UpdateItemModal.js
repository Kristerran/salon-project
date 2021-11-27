import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, ListGroup, InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { FiEdit } from 'react-icons/fi';
import axios from 'axios';


class UpdateItemModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalEdit: false,
            sku: this.props.infos.sku,
            name: this.props.infos.name,
            category: this.props.infos.category,
            size: this.props.infos.size,
            price: this.props.infos.price,
            img: this.props.infos.img,
            description: this.props.infos.description,
            inventory: this.props.infos.inventory
        };
    }

    toggle = () => this.setState({ modalEdit: !this.state.modalEdit });

    onSubmit = (sku, name, category, size, price, img, description, inventory) => {
        axios.post('/api/update/item', {
            sku, name, category, size, price, img, description, inventory
        })
            .then(response => {
                this.setState({ modalEdit: !this.state.modalEdit });
                console.log(response);
            })
            .then(() => {
                window.location.reload(true)
            })
            .catch(err => {
                console.log(err);
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
        const {sku, name, category, size, price, img, description, inventory } = this.state
        const { _id } = this.props.infos

        return (
            <div>
                <Button outline color="primary" size='sm' onClick={this.toggle}><FiEdit /></Button>
                <Modal isOpen={this.state.modalEdit} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>{this.props.infos.title} - (id: {_id})</ModalHeader>
                    <ModalBody>
                        <ListGroup>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                            <InputGroupText>SKU</InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder={"default: "+this.props.infos.sku} value={sku} onChange={this.onChangeSku} />
                        </InputGroup>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                            <InputGroupText>Name</InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder={"default: "+this.props.infos.name} value={name} onChange={this.onChangeName} />
                        </InputGroup>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                            <InputGroupText>Category</InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder={"default: "+this.props.infos.color.map(x=>' '+x)} value={category} onChange={this.onChangeCategory} />
                        </InputGroup>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                            <InputGroupText>Size</InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder={"default: "+this.props.infos.size} value={size} onChange={this.onChangeSize} />
                        </InputGroup>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                            <InputGroupText>Inventory</InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder={"default: "+this.props.infos.inventory} value={inventory} onChange={this.onChangeInventory} />
                        </InputGroup>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                            <InputGroupText>Image</InputGroupText>
                            </InputGroupAddon>
                            <Input type="textarea" placeholder={"default: "+this.props.infos.img} value={img} onChange={this.onChangeImg} />
                        </InputGroup>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                            <InputGroupText>description</InputGroupText>
                            </InputGroupAddon>
                            <Input type="textarea" placeholder={"default: "+this.props.infos.description} value={description} onChange={this.onChangeDescription} />
                        </InputGroup>
                        </ListGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" 
                        onClick={()=>this.onSubmit(
                            _id, sku, name, category, size, price, img, description, inventory
                            )}>Save changes?
                        </Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
    );
  }
};

export default UpdateItemModal;
