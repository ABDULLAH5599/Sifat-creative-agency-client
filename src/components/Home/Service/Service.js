import React, { useEffect, useState } from 'react';
import ServiceItem from '../ServiceItem/ServiceItem';
import { Link } from 'react-router-dom';

const Service = () => {
    const [services, setServices] = useState([])

    useEffect( () => {
        fetch('https://afternoon-beach-11581.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return (
        <section className="container text-center my-5 pt-5">
            <h2 style={{ color: "#555454"}} class='pt-5 '>Provide awesome <span><Link to="/order/:`${name}`" style={{color:'#fc3030'}}>services</Link></span></h2>
            <div className="row mt-5">
                    {
                        services.map(service =><ServiceItem service={service}></ServiceItem>)
                    }
            </div>
        </section>
    );
};

export default Service;