import { Injectable } from '@nestjs/common';
import { v1 as uuid } from 'uuid'
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserStatus } from './user.model';

@Injectable()
export class UsersService {
    private users = []

    getAllUsers():User[]{
        return this.users
    }
    createUser(createUserDto: CreateUserDto){
        const {nickname,password} = createUserDto
        const user = {
            id: uuid(),
            nickname,
            password,
            status: UserStatus.ACTIVE
        }
        this.users.push(user)
        return user
    }
    updateUserStatus(id:string,status:UserStatus){
        
    }
}
