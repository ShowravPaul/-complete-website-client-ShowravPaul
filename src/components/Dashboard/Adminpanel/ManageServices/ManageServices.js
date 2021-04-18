import React, { useEffect, useState } from 'react';
import AdminPanelMain from '../AdminPanelMain/AdminPanelMain';
import './ManageServices.css'

const ManageServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://the-green-nursery.herokuapp.com/services')
            .then(response => response.json())
            .then(data => setServices(data))
    }, [])

    function handleRemove(service) {
        fetch(`https://the-green-nursery.herokuapp.com/delete/${service._id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('The service has been removed');
                }
            })

        alert('Are you sure to delete this service?');
        
        let newServices = [];

        for (let i = 0; i < services.length; i++) {
            const element = services[i];
            if(element._id !== service._id)newServices.push(element);
        }

        setServices(newServices);
    }

    return (
        <>
            <div>
                <AdminPanelMain></AdminPanelMain>
            </div>
            <div className="container table">
                <h4 className="text-center">We have {services.length} services now!!</h4>
                <br />
                <table id="services">
                    <tr>
                        <th>Service Name</th>
                        <th>Description</th>
                        <th>Price</th>
                    </tr>
                    {
                        services.map(service =>
                            <tr>
                                <td>{service.serviceName}</td>
                                <td>{service.aboutService}</td>
                                <td>${service.price}</td>
                                <button className="btn btn-primary" onClick={() => handleRemove(service)}>Remove</button>
                            </tr>
                        )
                    }
                </table>
            </div>
        </>
    );
};

export default ManageServices;






// Do not cut trees. Transfer them from a place to another one. We have modern machines for doing this.
// Only flower plants are available now. Get one from home!
// We have specialist team for maintaining your garden.
// Our team will observe your garden and take necessary steps for controlling pest!
