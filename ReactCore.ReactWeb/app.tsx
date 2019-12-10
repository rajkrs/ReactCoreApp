import * as React from 'react';
import * as ReactDOM from 'react-dom';
import PublicRoute from './src/app/common/component/route/PublicRoute';
import PublicRouteComponent from './src/app/common/component/route/PublicRoute.Component';

import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';


import Home from './src/app/home';
import Login from './src/app/public/login/login.component';


const App = () => {
    return (
        <BrowserRouter>
                <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/login" component={Login} exact />
                <PublicRoute path="" component={PublicRouteComponent} />
                <Redirect to="/" />
                </Switch>
        </BrowserRouter>
    );
}

ReactDOM.render(<App/>, document.getElementById('root')); 