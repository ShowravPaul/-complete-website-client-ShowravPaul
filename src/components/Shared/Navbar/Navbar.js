import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logo.png'
import './Navbar.css'

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    setLoggedInUser(loggedInUser);// extra line, just for using it

    return (
        <nav className="navbar navbar-expand-lg navbar-light">

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <Link class="navbar-brand ml-5" to="/home">
                <img src={logo} width="45" height="45" class="d-inline-block align-top float-left mr-3" alt="" />
                <h3 className="web-name">  THE GREEN NURSERY</h3>
            </Link>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link mr-5" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5" to="/contact-us">Contact us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5" to="/our-services">Our services</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5" to="/our-branches">Our branches</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-5" to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        {
                            loggedInUser.name ? <h5 style={{ color: 'green' }}> {loggedInUser.name} </h5> : <Link className="nav-link mr-5" to="/login">Login</Link>
                        }
                    </li>
                </ul>
            </div>
        </nav >
    );
};

export default Navbar;