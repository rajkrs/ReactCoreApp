import { ServiceClient } from '../common/services/service_client.service';
import { ApiResponse } from '../common/models/api_response.model';

import { LoginRequestDto } from './login.model';

export class LoginService {

    private serviceRoute: string = 'login/';
    private client: ServiceClient;

    constructor() {
        this.client = new ServiceClient();
    }

    getHelpLine() {
        return this.client.Get(this.serviceRoute + "helpline")
            .then(data => { return data as ApiResponse<string[]> });
    }

    //login(loginReq: logi): Observable<ApiResponse<UserInfoRes>> {
    //    return this.client.post<ApiResponse<UserInfoRes>>(this.serviceRoute, loginReq);
    //}
}