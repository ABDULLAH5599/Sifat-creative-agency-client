import React from 'react';
import './Partner.css'
import slack from '../../../resources/images/logos/slack.png'
import google from '../../../resources/images/logos/google.png'
import uber from '../../../resources/images/logos/uber.png'
import netflix from '../../../resources/images/logos/netflix.png'
import airbnb from '../../../resources/images/logos/airbnb.png'

const Partner = () => {
    return (
        <div className="container">
            <div style={{marginTop: "80px"}} className="row d-flex justify-content-center">
                <div className="col-md-10 offset-md-1 partner-logo">
                    <img className="mr-5" src={slack} alt=""/>
                    <img className="mr-5" src={google} alt=""/>
                    <img className="mr-5" src={uber} alt=""/>
                    <img className="mr-5" src={netflix} alt=""/>
                    <img src={airbnb} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Partner;