import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { TakenServiceContext, UserContext } from '../../../../App';
import { processOrder } from '../../../../utilities/databaseManager';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import UserDashboardMain from '../UserDashboardMain/UserDashboardMain';
import './Order.css'

const Order = () => {
    const [takenService, setTakenService] = useContext(TakenServiceContext);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [shippingData, setShippingData] = useState(null);

    // these 2 lines are extra, just for using them
    setTakenService(takenService);
    setLoggedInUser(loggedInUser);

    const history = useHistory();

    const onSubmit = data => {
        setShippingData(data);
    };

    const { register, handleSubmit, errors } = useForm();

    const saveOrderData = (paymentID) => {
        const { price, serviceName } = takenService;
        const orderData = {
            ...loggedInUser,
            shippingData,
            serviceName,
            price,
            data: new Date(),
            status: "pending",
            paymentID
        };

        // console.log(orderData);
        fetch('http://localhost:5000/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderData)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    processOrder();
                    alert('your order placed successfully! :D');
                }
                // console.log(data);
            })
            
            history.replace('/home');
    }

    return (
        <>
            <div>
                <UserDashboardMain></UserDashboardMain>
                <h4 className="text-center">For choosing a service, go to homepage!</h4>
            </div>
            <div className="row order">
                <div className="col-md-6 p-5 left-part">
                    <h5>You are going to order:</h5>
                    <br/>
                    <h6>Service: {takenService.serviceName}</h6>
                    <br/>
                    <h6>price: {takenService.price}</h6>
                </div>
                <div className="col-md-6 p-3 right-part">
                    <div style={{ display: shippingData ? 'none' : 'block' }} className="container center_div">
                        <h4>Submit your information: </h4>
                        <form className="order-form" onSubmit={handleSubmit(onSubmit)}>
                            <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your Name" />
                            {errors.name && <span className="error">Name is required</span>}

                            <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Your Email" />
                            {errors.email && <span className="error">Email is required</span>}

                            <input name="address" ref={register({ required: true })} placeholder="Your Address" />
                            {errors.address && <span className="error">Address is required</span>}

                            <input name="phone" ref={register({ required: true })} placeholder="Your Phone Number" />
                            {errors.phone && <span className="error">Phone Number is required</span>}

                            <input type="submit" />
                        </form>
                    </div>
                    <div style={{ display: shippingData ? 'block' : 'none' }} className="order">
                        <h3>please pay here:</h3>
                        <br />
                        <ProcessPayment handlePayment={saveOrderData}></ProcessPayment>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Order;