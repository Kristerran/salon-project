import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';
import UpdateItemModal from './UpdateItemModal.js';
import DeleteItem from './DeleteItem.js';

export default class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiList: [],
        }
    }
    async componentDidMount() {
        try {
            const response = await axios.get('/api/productsdata')
            const apiList = await response.data;
            this.setState({ apiList })
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const stylesColor = (color) => ({
            textDecoration: 'underline',
        })

        const { stylesTab2 } = this.props
        const { apiList } = this.state

        return (
            <Table responsive striped border hover size='sm'>
                <thead style={stylesTab2}>
                    <tr>sku, name, category, size, price, img, description, inventory
                        <th>#</th>
                        <th>Id</th>
                        <th>Name</th>
                        <th>SKU</th>
                        <th>Category</th>
                        <th>Size</th>
                        <th>Price</th>
                        <th>Img</th>
                        <th>Description</th>
                        <th>Inventory</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                {
                    apiList.map((x, index) =>
                        <tr key={x.id}>
                            <th scope='row'>{index + 1}</th>
                            <td>{x._id}</td>
                            <td>{x.name}</td>
                            <td>{x.sku}</td>
                            <td>{x.category}</td>
                            <td>{x.size}</td>
                            <td>{x.price}</td>
                            <td>{x.img.length}</td>
                            <td>{x.description.substring(0, 30)+'... '}</td>
                            <td>{x._inventory}</td>
                            <td><UpdateItemModal infos={x} /></td>
                            <td><DeleteItem id={x._id} name={x.name} /></td>
                        </tr>
                        )
                    }
                </tbody>
            </Table>
        )
    }
};