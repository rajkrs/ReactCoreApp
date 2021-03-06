import axios, {
    AxiosRequestConfig,
    AxiosResponse,
    AxiosError,
    AxiosInstance,
    AxiosAdapter,
    Cancel,
    CancelToken,
    CancelTokenSource,
    Canceler
} from 'axios';

import { ServiceProviderConst } from '../constants/service_provider'


const httpOptions = {
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000,
};

export class ServiceClient {

    apiBaseUrl = ServiceProviderConst.baseUrl;
    CancelToken = axios.CancelToken;
    request = this.CancelToken.source();


   
    client = axios.create({
        baseURL: this.apiBaseUrl,
        headers: httpOptions.headers,
        timeout: httpOptions.timeout
    });

     
    //interceptAuthentication() {
    //    this.client.interceptors.request.use(
    //        config => {
    //            config.headers.authorization = 'dummy_token';
    //            return config;
    //        },
    //        error => Promise.reject(error)
    //    );
    //}



     Get(url: string, requiredToken: boolean = true) {
        if (requiredToken) {
           // this.interceptAuthentication();
        }

          
        return this.client.get(url, {
            cancelToken: this.request.token
        })
        .then(response => {
            //console.log(response.data);
            return response.data;
        })
        .catch(function (thrown) {
            if (axios.isCancel(thrown)) {
                console.log('request canceled', thrown.message);
            }
            else {
                // handle error
                console.log('error in Get,', thrown.message);

            }
        });

 
     }





    Post(url: string, requestBody: any, requiredToken: boolean = true) {
        if (requiredToken) {
            // this.interceptAuthentication();
        }


        return this.client.post(url, requestBody, {
            cancelToken: this.request.token
        })
            .then(response => {
                //console.log(response.data);
                return response.data;
            })
            .catch(error => {

                if (axios.isCancel(error)) {
                    console.log('request canceled', error.message);
                }
                else {
                    // handle error
                    console.log('error in Post,', error.message);
                }
                console.log('error.response.data', error.response.data);
                return Promise.reject(error.response);
            });


    }



    Kill() {
        this.request.cancel('Operation canceled by the user.');
    }
}




