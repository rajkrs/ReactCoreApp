import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { Message } from '../../models/api_response.model';
import * as styles from '../../components/toster/alert.component.css';
import { AlertConst } from '../../constants/alert';
import { MessageType } from '../../enums/api_response';


export class Toster {

   

    static success = (message: any, timeInSecond = AlertConst.defaultTimeOut ) => {
        return toast.success(message, {
            position: toast.POSITION.TOP_CENTER,
            className: styles._alertSucess,
            progressClassName: styles._alertProgress,
            autoClose: timeInSecond
        });
    };

    static error = (message: any, timeInSecond = AlertConst.defaultTimeOut ) => {

        return toast.error(message, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: timeInSecond
        });
    };

    static info = (message: any, timeInSecond = AlertConst.defaultTimeOut ) => {

        return toast.info(message, {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: timeInSecond
        });
    };

    static warn = (message: string, timeInSecond = AlertConst.defaultTimeOut ) => {
        return toast.warn(message, {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: timeInSecond
        });
    };

    static notify(message: Message[], timeInSecond = AlertConst.defaultTimeOut ){
        var tostId = [];
        message.forEach(function (msg: Message, index) {
            if (msg.type == MessageType.Error) {
                tostId.push(Toster.error(msg.value, timeInSecond));
            }
            else if (msg.type == MessageType.Info) {
                tostId.push(Toster.info(msg.value, timeInSecond));
            }
            else if (msg.type == MessageType.Warn) {
                tostId.push(Toster.warn(msg.value, timeInSecond));
            }
        });
        return tostId;
    }



    static dismiss = (toastId: any) => toast.dismiss(toastId);

    static dismissAll = (toastId: any) => toast.dismiss();


}

