import React, { useEffect, useState } from 'react';
import ServiceDetail from '../ServiceDetails/ServiceDetails';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(response => response.json())
            .then(data => setServices(data))
    }, [])

    return (
        <section className="services-container p-3">
            <div className="text-center">
                <h3 style={{color: 'green'}}>We dream for a better world, a green world.</h3>
                <h2 className="mt-5">Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row pt-3">
                    {
                        services.map(service => <ServiceDetail service={service} key={service.serviceName}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;