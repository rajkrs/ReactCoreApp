import * as React from 'react';

class History extends React.Component<any, any> {
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
                    <h1>History 2</h1>
                </div>
            </div>
        );
    }

}
export default History;

