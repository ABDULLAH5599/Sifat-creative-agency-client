import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Sidebar.css'
import logo from "../../../resources/images/logos/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faList, faCommentDots, faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faListAlt } from '@fortawesome/free-regular-svg-icons';
// import {   } from '@fortawesome/free-regular-svg-icons'

const Sidebar = () => {
    const {name} = useParams();
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-12 py-5 px-4 bg-danger" style={{height:"100vh"}}>
            <ul className="list-unstyled">
                    <li>
                        <Link to="/home" className="text-white">
                            <h3>Sifat Creative Agency</h3> 
                        </Link>
                    </li>
                    
                    <li>
                        <Link to="/service" className="text-white">
                            <FontAwesomeIcon icon={faList} /> <span>Service List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/review" className="text-white">
                            <FontAwesomeIcon icon={faCommentDots} /> <span>Review</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/servicedetails" className="text-white">
                            <FontAwesomeIcon icon={faListAlt} /> <span>Service List</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addservice" className="text-white">
                            <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                        </Link>
                    </li>
 
                </ul>
        </div>
    );
};

export default Sidebar;