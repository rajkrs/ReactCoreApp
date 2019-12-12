//core
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';



//UI
import { AvForm, AvField, AvGroup, AvInput, AvFeedback, AvRadioGroup, AvRadio } from 'availity-reactstrap-validation';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';


//common
import { ApiResponse } from '../../common/models/api_response.model';
import { LoginRequestDto, LoginResponseDto } from './login.model';
import { Toster } from '../../common/components/toster/alert';


//module
import * as styles from './login.component.css';
import { LoginService } from './login.service';
import { doLogin } from './login.action';



class Login extends React.Component<any, any> {
    [x: string]: any;
    private loginService: LoginService;

    state: {
        userIsRequired: boolean,
        helpLineNumbers: string[]
        loginRequest: LoginRequestDto,
        loginResponse: LoginResponseDto
    };

    constructor(props) {
        super(props);
        this.loginService = new LoginService();
        this.state = {
            userIsRequired: true,
            helpLineNumbers: [],
            loginRequest: new LoginRequestDto(),
            loginResponse: null
        };

        this.handleInvalidSubmit = this.handleInvalidSubmit.bind(this);
    }

    handleInvalidSubmit(event, errors, values) {

    }




    componentDidMount() {
        this.loginService.getHelpLine().then(response => {
            this.setState({
                helpLineNumbers: response.data
            });
            console.log(this.state.helpLineNumbers);
        });
    }

    componentDidUpdate(preProps) {
        if (this.props.isLoginStarted) {
             //Disable
        }

        if ((preProps.loginSucessResponse != this.props.loginSucessResponse)
            && this.props.loginSucessResponse != null) {
            Toster.success('Login Sucessfully!');
            this.props.history.push("/profile");
        }

        if ((preProps.loginFailourResponse != this.props.loginFailourResponse)
            && this.props.loginFailourResponse != null) {

            Toster.notify(this.props.loginFailourResponse.messages);
        }

    }



    onLoginPress = (e) => {
        console.log('onLoginPress', e);
        this.props.doLogin(this.state.loginRequest);
    }

    render() {
        console.log('loginServiceResponse props', this.props.loginServiceResponse);
        return (



            <div class="container h-100;" className={styles.loginblue}>


                {/*
                    this.state.helpLineNumbers.map(number => (
                    <div className="alert alert-info">{number}</div>
                    ))
                */}



                <div class="row h-100 justify-content-center align-items-center">
                    <div class="col-4">
                        <h2>Sign In</h2>

                        <AvForm onInvalidSubmit={this.handleInvalidSubmit} onValidSubmit={this.onLoginPress}>
                            <AvField name="userName" label="Username" type="text" errorMessage="Invalid Username" validate={{
                                required: { value: this.state.userIsRequired },
                                pattern: { value: '^[A-Za-z0-9]+$' },
                                minLength: { value: 3 },
                                maxLength: { value: 16 }
                            }}
                                onChange={e => {
                                    var value = e.target.value;
                                    this.setState(prevState => ({
                                        loginRequest: {
                                            ...this.state.loginRequest,
                                            UserName: value
                                        }
                                    }));
                                }}
                            />

                            <AvField name="password" label="Password" type="password" validate={{
                                required: { value: true, errorMessage: 'Please enter password' },
                                pattern: { value: '^[A-Za-z0-9]+$', errorMessage: 'Your name must be composed only with letter and numbers' },
                                minLength: { value: 3, errorMessage: 'Your name must be between 6 and 16 characters' },
                                maxLength: { value: 16, errorMessage: 'Your name must be between 6 and 16 characters' }
                            }}
                                onChange={e => {
                                    var value = e.target.value;
                                    this.setState(prevState => ({
                                        loginRequest: {
                                            ...this.state.loginRequest,
                                            Password: value
                                        }
                                    }));
                                }}
                            />

                            <Button color="primary" disabled={this.props.isLoginStarted}>Login</Button>

                        </AvForm>
                        <hr />

                        <Link to="/">Home page</Link>
                        <br />
                        <Link to="/about-us" >About-us</Link>
                        <br />
                        <Link to="/contact-us">Contact-us</Link>
                    </div>

                </div>
            </div>

        );
    }
}


const mapStateToProps = ({ login }) => {
    const {
        isLoginStarted,
        loginSucessResponse,
        loginFailourResponse
    } = login;
    return {
        isLoginStarted,
        loginSucessResponse,
        loginFailourResponse
    };
};

//To call do login function 
//const mapDispatchToProps = () => {
//    return {
//        doLogin: doLogin
//    }
//}


//export default connect(mapStateToProps, mapDispatchToProps)(Login);
//OR

export default connect(mapStateToProps, { doLogin })(Login); 





