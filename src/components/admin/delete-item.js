import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import FiXCircle from 'react-icons/fi';
import axios from 'axios';

class DeleteItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalEdit: false,
        };
    }

    handleDelete = id => {
        axios.delete('/api/delete/item', {
            params: { id }
        })
            .then(response => {
                console.log(response);
                this.setState({ modalEdit: !this.state.modalEdit });
            })
            .then(() => {
                window.location.reload(true);
            })
            .catch(err => {
                console.log(err);
            });
    }

    toggle = () => this.setState({ modalEdit: !this.state.modalEdit });

    render() {
        const { name, id } = this.props
        return (
            <div>
                <Button size='sm' onClick={this.toggle}><FiXCircle /></Button>
                <Modal isOpen={this.state.modalEdit} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>{title}</ModalHeader>
                    <ModalBody>Are you sure you want to delete {name}?
                    </ModalBody>
                    <ModalFooter>
                        <Button color='danger' onClick={() => this.handleDelete(id, name)}>Yes, Delete it</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default DeleteItem;