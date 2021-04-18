import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { TakenServiceContext } from '../../../App';
import './ServiceDetails.css'

const ServiceDetail = ({ service }) => {
    const { aboutService, price, imageURL, serviceName } = service;
    
    const [takenService, setTakenService] = useContext(TakenServiceContext);
    setTakenService(takenService); // extra line, just for using it

    const history = useHistory();

    const handleOrder = (service) => {
        setTakenService(service);
        history.push(`/order`);
    }

    return (
        <div className="col-sm-12 col-md-6 col-lg-4 text-center">
            <div className="card">
                <img src={imageURL} alt="" />
                <div class="card-body">
                    <h5 class="card-title">{serviceName}</h5>
                    <p class="card-text">{aboutService}</p>
                    <h6>price: ${price}</h6>
                    <br/>
                    <button class="btn btn-brand" onClick={()=> handleOrder(service)}>Take this service</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;

