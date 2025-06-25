import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import Vendors from './pages/Vendors';
import './styles/global.css';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/products" component={Products} />
                <Route path="/vendors" component={Vendors} />
            </Switch>
        </Router>
    );
}

export default App;