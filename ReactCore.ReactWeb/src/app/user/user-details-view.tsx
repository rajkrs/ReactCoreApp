//core
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

//UI
import { AvForm, AvField, AvGroup, AvInput, AvFeedback, AvRadioGroup, AvRadio } from 'availity-reactstrap-validation';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';

import { LoginResponseDto } from '../public/login/login.model';





class UserDetailsView extends React.Component<any, any> {
    [x: string]: any;


    constructor(props) {
        super(props);
         
    }

    render() {

        console.log('profile ',this.props.loginResponse);
        return (

            <div class="container h-100;" >
                <ul>
                    <li><strong>User Name:</strong><span>{this.props.loginResponse.name}</span></li>
                    <li><strong>User Id:</strong><span>{this.props.loginResponse.id}</span></li>
                    <li><strong>Address:</strong><span>{this.props.loginResponse.address}</span></li>
                </ul>
            </div>
        );
    }
}



const mapStateToProps = ({ login }) => {
    return {
        loginResponse: login.loginSucessResponse && login.loginSucessResponse.data || {},
    };
};

 
 
export default connect(mapStateToProps, {})(UserDetailsView);







 