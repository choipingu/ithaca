import { Injectable, NotFoundException } from '@nestjs/common';
import { v1 as uuid } from 'uuid'
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserStatus } from './user.model';

@Injectable()
export class UsersService {
    private users = []

    getAllUsers():User[]{  // 모든 유저 가져오기
        return this.users
    }
    createUser(createUserDto: CreateUserDto){ // 유저 생성하기
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
    getUserById(id:string): User{ //특정 유저 찾기
        const found = this.users.find((el)=>el.id === id)
        if(!found) {
            throw new NotFoundException(`Can't find Board with id ${id}`)
        }
        return found
    }

    deleteUser(id:string) {
        const user = this.getUserById(id)
        this.users = this.users.filter((el)=> el.id !== user.id)
    }

    updateUserStatus(id:string,status:UserStatus){ // 유저 상태 업데이트
        const user = this.getUserById(id)
        user.status = status
        return user
    }
}
