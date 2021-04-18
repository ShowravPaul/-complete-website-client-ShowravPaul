import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../App';
import UserDashboardMain from '../UserDashboardMain/UserDashboardMain';

import './MyOrderList.css'

const MyOrderList = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    setLoggedInUser(loggedInUser); // extra line, just for using it

    useEffect(() => {
        fetch('http://localhost:5000/myOrderList?email=' + loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [loggedInUser.email])

    return (
        <>
            <UserDashboardMain></UserDashboardMain>
            <div className="container table">
                <h3>Hello, {loggedInUser.name}</h3>
                <h4>You have {orders.length} orders!!</h4>
                <br />
                <table id="myOrderList">
                    <tr>
                        <th>Service Name</th>
                        <th>Price</th>
                        <th>Order date</th>
                        <th>Order Status</th>
                    </tr>
                    {
                        orders.map(order =>
                            <tr>
                                <td>{order.serviceName}</td>
                                <td>${order.price}</td>
                                <td>{new Date(order.data).toDateString('dd/MM/yyyy')}</td>
                                <td>{order.status}</td>
                            </tr>
                        )
                    }
                </table>
            </div>
        </>
    );
};

export default MyOrderList;