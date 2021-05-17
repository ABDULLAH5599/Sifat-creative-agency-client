import React from 'react';
import frame from '../../../resources/images/logos/Frame.png'

const HeaderContent = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4 col-sm-12">
                    <h1 className="mb-5">Let’s Start <br/>Your Business With Our <br/> Nice Team</h1>
                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                    <button className="btn btn-primary main-btn">Hire us</button>
                </div>
                <div className="col-md-7 col-sm-12 offset-md-1">
                    <img className="img-fluid" style={{width:'80%'}} src={frame} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default HeaderContent;