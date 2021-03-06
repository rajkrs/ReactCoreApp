import * as React from 'react';
import { Redirect, Route } from 'react-router-dom';



class CustomRoute extends React.Component<any, {}>{
    [x: string]: any;
    constructor(props: any) {
        super(props);
    }

    render() {
        const { component: Component, ...rest } = this.props
        return (
            <>
                <Route {...rest}
                    render={props => {
                        return <Component {...props} />
                    }} />
            </>
        )
    }
}

export default CustomRoute;
