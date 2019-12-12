import { LoginService } from './login.service';
import {
    Login_Start,
    Login_Success,
    Login_Failed 
} from './login.constant';


const loginService = new LoginService();

export const doLogin = (loginRequest) => (dispatch) => {
    console.log("You clicked on Login with", loginRequest);
    dispatch({ type: Login_Start });

    loginService.login(loginRequest).then(response => {
        if (response.status == 1) {
            dispatch({ type: Login_Success, payload: response });
        }
        else {
            dispatch({ type: Login_Failed, payload: response});
        }
    });
        
}

