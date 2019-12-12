import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AboutUs from '../../../public/about-us/about-us.component';
import UserDetailsView from '../../../user/user-details-view';
import Error404 from '../../../public/error/404.component';

class CustomRouteComponent extends React.Component<any, any> {
    [x: string]: any;

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Switch>
                <Route path={`${this.props.match.path}about-us`} exact component={AboutUs} />

                <Route path={`${this.props.match.path}profile`} exact component={UserDetailsView} />
                <Route path={`${this.props.match.path}:module`} exact component={Error404} />
            </Switch>
        );
    }
}

export default CustomRouteComponent;
