import * as React from 'react';

class Error404 extends React.Component<any, any> {
    [x: string]: any;

    constructor(props) {
        super(props);
        const { module } = this.props.match.params
        this.state = {
            pageUrl: module
        }
        console.log('urlc', this.state.pageUrl);
    }
    
    render() {

        return (
            <div class="container h-100 d-flex justify-content-center">
                <div class="my-auto">
                    <h1>404, Page not found.</h1>
                    <p>Url '/{this.state.pageUrl}' which you are looking for, dosn't exists.</p>
                </div>
            </div>

           
        );
    }

}
export default Error404;

