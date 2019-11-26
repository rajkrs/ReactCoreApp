export interface Message {
    type: MessageType;
    code: MessageCode;
    value: string;
}

export interface ApiResponse<T> {
     status: Status;
    messages: Message[];
    data: T;
}



/*
{
  "status": 1,
  "messages": [
    {
      "type": 0,
      "code": 3,
      "value": "Your password would be expired in next 10 days."
    }
  ],
  "data": {
    "userId": "121",
    "name": "Raj Kumar"
  }
}
*/