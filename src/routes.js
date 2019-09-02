import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'

import Login from './components/Auth/Login';
import Home from './components/Home/Home';



//
const checkAuth = () => {
    const token = localStorage.getItem('token');
    if (!token ) {
        return false;
    }
    return true;
}


const AuthRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        checkAuth() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{ pathname: '/login' }} />
        )
    )} />
)




const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/login" component={Login} />
            <AuthRoute path="/" component={Home} />
        </Switch>
    </BrowserRouter>
);

export default Router;