export enum Status {
    failoure = 0,
    success = 1
}

export enum MessageType {
    Info = 0,
    Warn = 1,
    Error = 2
}

export enum MessageCode {
    //Error Code
    Other_Error = 1,
    Valiadtion_Error = 2,
    Network_Error = 3,
    Authentication_Error = 4,
    SqlServer_Error = 5,
    FileNotFound_Error = 6,


    //Info Code
    Other_Info = 1,
    Valiadtion_Info = 2,
    Network_Info = 3,
    Authentication_Info = 4,
    SqlServer_Info = 5,
    FileNotFound_Info = 6,


    //Info Code
    Other_Warning = 1,
    Valiadtion_Warning = 2,
    Network_Warning = 3,
    Authentication_Warning = 4,
    SqlServer_Warning = 5,
    FileNotFound_Warning = 6
}