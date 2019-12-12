import { Login_Start, Login_Failed, Login_Success } from './login.constant';
import { LoginRequestDto, LoginResponseDto } from './login.model';
import { ApiResponse, Message } from '../../common/models/api_response.model';
import { Status } from '../../common/enums/api_response';



const INITIAL_STATE = {
    isLoginStarted: false,
    loginSucessResponse: null,
    loginFailourResponse: null
};

export default (state = INITIAL_STATE, action) => {

    console.log('login reducer', action.type, action.payload);

    switch (action.type) {


        case Login_Start:
            return {
                ...state, ...INITIAL_STATE, isLoginStarted : true  };

        case Login_Success:
            return {
                ...state, ...INITIAL_STATE, loginSucessResponse: action.payload, isLoginStarted: false };

        case Login_Failed:
            return {
                ...state, ...INITIAL_STATE, loginFailourResponse: action.payload, isLoginStarted: false
            };

        default:
            return state;
    }
};