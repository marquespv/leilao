import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import NewAuction from './pages/NewAuction';
import Profile from './pages/Profile';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/auction/new" component={NewAuction} />
                <Route path="/profile" component={Profile} />
                
            </Switch>
        </BrowserRouter>
    )
}
