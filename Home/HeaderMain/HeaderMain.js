import React from 'react';
import plantAtHome from '../../../images/planting a plant.jpg';

const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: '#3A4256'}}>Plant a Tree, Plant a Hope.</h1>
                <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
                <button className="btn btn-success">Order a plant now!</button>
            </div>
            <div className="col-md-6">
                <img src={plantAtHome} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;