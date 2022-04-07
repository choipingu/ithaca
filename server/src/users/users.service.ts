import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = ['pingu','pep']

    getAllUsers(){
        return this.users
    }
    addUsers(){
        return this.users.push()
    }
}
