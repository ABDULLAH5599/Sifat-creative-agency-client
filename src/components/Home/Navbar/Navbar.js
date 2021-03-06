import React from 'react';
import { Link, useParams } from 'react-router-dom';
import logo from '../../../resources/images/logos/logo.png'

const Navbar = () => {
    const {name} = useParams();
    return (
            <div className="container">
                <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
                <a class="navbar-brand" href="#"><h4 class='font-weight-bold'>Sifat Creative Agency</h4> </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link mr-4" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mr-4" href="#">Our Portfolio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mr-4" href="#">Servise</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mr-4" href="#">Contact Us</a>
                    </li>
                    <li>
                        <Link to="/order/:`${name}`"><button className="btn btn-danger">Login</button></Link>
                    </li>                    
                    </ul>
                </div>
                </nav>
            </div>
    );
};

export default Navbar;