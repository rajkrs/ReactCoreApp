
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import CustomRoute from './src/app/common/components/route/CustomRoute';
import CustomRouteComponent from './src/app/common/components/route/CustomRoute.Component';


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
import { ToastContainer } from 'react-toastify';



import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import reducers from './src/app/common/reducers';



const App = () => {

    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));


    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/login" component={Login} exact />

                    <CustomRoute path="" component={CustomRouteComponent} exact />
                    <Redirect to="/" />
                </Switch>
                <ToastContainer />
            </BrowserRouter>
        </Provider>
    );
}

ReactDOM.render(<App />, document.getElementById('root')); 