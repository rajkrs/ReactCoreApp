import * as React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, withRouter } from 'react-router-dom';

class Home extends React.Component{
    render() {
        return (
            <div class="loginblue">
                <h2>Wlcome Home!</h2>
                <p>Get all basic info about app here.</p>
                <Link to="/login">Click here to Login</Link>
            </div>
        );
    }
}
export default Home;



