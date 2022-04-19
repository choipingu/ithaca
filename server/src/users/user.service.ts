import { Injectable, NotFoundException } from '@nestjs/common';
import { v1 as uuid } from 'uuid'
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { UserStatus } from './user-status-validation';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository
        ){}

    async getAllUsers():Promise<User[]>{  // 모든 유저 가져오기
        return await this.userRepository.find()
    }
    createUser(createUserDto: CreateUserDto): Promise<User>{ // 유저 생성하기
        return this.userRepository.createUser(createUserDto)
    }
    getUserById(id:number): Promise<User>{ //특정 유저 찾기
        return this.userRepository.getUserById(id)
    }

    deleteUser(id:number): Promise<void> {
        return this.userRepository.deleteUser(id)
    }

    updateUserStatus(id:number,status:UserStatus):Promise<User>{ // 유저 상태 업데이트
        return this.userRepository.updateUserStatus(id,status)
    }
}
