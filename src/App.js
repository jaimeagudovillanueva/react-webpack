import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

import Users from './containers/Users';

const AysncPizza = asyncComponent(() => import('./containers/Pizza.js'))

class App extends Component {
    render () {
        return (
            <div>
                <div>
                    <Link to="/">Users</Link>
                    <Link to="/pizza">Pizza</Link>
                </div>
                <div>
                    <Route path="/" exact component={Users}/>
                    <Route path="/pizza" component={AysncPizza}/>
                </div>
            </div>
        );
    }
}

export default App;