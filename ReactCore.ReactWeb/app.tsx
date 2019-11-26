import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

import Home from './src/app/home';
import Login from './src/app/login/login.component';


const App = () => {
    return (
        <BrowserRouter>
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/login" component={Login} exact/>
                    <Redirect to="/"/>
                </Switch>
        </BrowserRouter>
    );
}

ReactDOM.render(<App/>, document.getElementById('root')); 