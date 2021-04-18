import React from 'react';

const OurPartnerDetails = ({ partner }) => {
    const { partnerName, aboutPartner, partnerImage } = partner;
    return (
        <div className="col-sm-12 col-md-6 col-lg-4 text-center">
            <div className="card" style={{backgroundColor: "lightBlue"}}>
                <img src={partnerImage} alt="" />
                <div class="card-body">
                    <h5 class="card-title">{partnerName}</h5>
                    <p class="card-text">{aboutPartner}</p>
                    <button class="btn btn-primary">See more...</button>
                </div>
            </div>
        </div>
    );
};

export default OurPartnerDetails;