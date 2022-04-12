export interface User {
    id:string
    nickname:string
    password: string
    status: UserStatus
}

export enum UserStatus{
    ACTIVE = 'ACTIVE',
    BAN = 'BAN'
}