import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Assuming you might want to add specific styles for the Home component

const Home = () => {
    return (
        <div className="home">
            <h1>Welcome to the Online Store</h1>
            <p>Your one-stop solution for managing products and vendors.</p>
            <div className="navigation">
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <Link to="/products">Manage Products</Link>
                <Link to="/vendors">Manage Vendors</Link>
            </div>
        </div>
    );
};

export default Home;