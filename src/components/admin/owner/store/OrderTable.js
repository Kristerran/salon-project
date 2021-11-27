import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';

export default class OrderTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apiList: [],
        }
    }
    async componentDidMount() {
        try {
            const response = await axios.get('/api/orders')
            const apiList = await response.data;
            this.setState({ apiList })
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const { stylesTab1 } = this.props
        const { apiList } = this.state

        return (
            <Table responsive striped border hover size='sm'>
                <thead style={stylesTab1}>
                    <tr>
                        <th>#</th>
                        <th>Id</th>
                        <th>Ref</th>
                        <th>Date</th>
                        <th>Order #</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Order Amount</th>
                        <th>Delivery Amount</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>Zip Code</th>
                    </tr>
                </thead>
                <tbody>
                {
                    apiList.map((x, index) =>
                        <tr key={x.id}>
                            <th scope='row'>{index + 1}</th>
                            <td>{x._id}</td>
                            <td>{x.ref}</td>
                            <td>{x.createdAt}</td>
                            <td>{x.order.map(item => <div>{`x$item.quantity} ${item.idItem}(${item.nameItem}[${item.sizeItem}] ${item.price}$) `}</div>)}</td>
                            <td>{x.customerinfo.firstName}</td>
                            <td>{x.customerinfo.lastName}</td>
                            <td>{x.totalAmount+ ' $'}</td>
                            <td>{x.totalDelivery+ ' $'}</td>
                            <td>{x.customerinfo.email}</td>
                            <td>{x.customerinfo.phoneNumber}</td>
                            <td>{x.customerinfo.address1 + ' ' +x.customerinfo.address2}</td>
                            <td>{x.customerinfo.city}</td>
                            <td>{x.customerinfo.zipCode}</td>
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