//core
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

//UI
import { AvForm, AvField, AvGroup, AvInput, AvFeedback, AvRadioGroup, AvRadio } from 'availity-reactstrap-validation';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

//common
import { ApiResponse } from '../common/models/api_response.model';

//module
import * as styles from './login.component.css';
import { LoginService } from './login.service';

 

class Login extends React.Component<any, any> {
    [x: string]: any;
    private loginService: LoginService;

    state: {
        userIsRequired: boolean,
        helpLineNumbers: string[]
    };

    constructor(props) {
        super(props);
        this.loginService = new LoginService();
        this.state = {
            userIsRequired: true,
            helpLineNumbers: [],
        };
    }

    componentDidMount() {
        this.loginService.getHelpLine().then(response => {
            this.setState({
                helpLineNumbers: response.data
            });
            console.log(this.state.helpLineNumbers);
        });
    }

    render() {
        return (

            

            <div class="container h-100;" className={styles.loginblue}>

               
                {this.state.helpLineNumbers.map(number => (
                    <div className="alert alert-info">{number}</div>
                        ))}
                  


                <div class="row h-100 justify-content-center align-items-center">
                    <div class="col-4">
                        <h2>Sign In</h2>

                        <AvForm>
                            <AvField name="userName" label="Username" type="text" errorMessage="Invalid Username" validate={{
                                required: { value: this.state.userIsRequired },
                                pattern: { value: '^[A-Za-z0-9]+$' },
                                minLength: { value: 6 },
                                maxLength: { value: 16 }
                            }} />
                            <AvField name="password" label="Password" type="password" validate={{
                                required: { value: true, errorMessage: 'Please enter password' },
                                pattern: { value: '^[A-Za-z0-9]+$', errorMessage: 'Your name must be composed only with letter and numbers' },
                                minLength: { value: 6, errorMessage: 'Your name must be between 6 and 16 characters' },
                                maxLength: { value: 16, errorMessage: 'Your name must be between 6 and 16 characters' }
                            }} />
                            <Button color="primary">Login</Button>
                        </AvForm>

                        <Link to="/home">Go back to Home page</Link>
                    </div>

                </div>
            </div>

        );
    }
}
export default  Login ;

