export interface User {
    name: string;
    lastname: string;
    username: string;
    password: string;
    defaultcoin: boolean;
    id: any;
}

export interface Crypto {
    type: string;
    value: any;
}