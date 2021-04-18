import React from 'react';
import partner1 from '../../../images/partner1.jpg'
import partner2 from '../../../images/partner2.PNG'
import partner3 from '../../../images/partner3.PNG'
import OurPartnerDetails from '../OurPartnerDetails/OurPartnerDetails';

const OurPartners = () => {
    const partnerData = [
        {
            partnerName: 'The Flower Garden Company',
            aboutPartner: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. In error ex explicabo tempora mollitia veritatis!',
            partnerImage: partner1
        },
        {
            partnerName: 'Bloomex',
            aboutPartner: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. In error ex explicabo tempora mollitia veritatis!',
            partnerImage: partner2
        },
        {
            partnerName: 'White Flower Farm',
            aboutPartner: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. In error ex explicabo tempora mollitia veritatis!',
            partnerImage: partner3
        }
    ]
    return (
        <section className="p-3" style={{ backgroundColor: "rgb(247, 248, 202)" }}>
            <div className="text-center">
                <h2 className="mt-5">Our Partners</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row pt-3">
                    {
                        partnerData.map(partner => <OurPartnerDetails partner={partner} key={partner.partnerName}></OurPartnerDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default OurPartners;
