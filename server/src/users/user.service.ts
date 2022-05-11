import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto, UserLoginDto } from './dto/user.dto';
import { User } from './user.entity';
import { UserStatus } from './user-status-validation';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express'
import * as bcrypt from 'bcryptjs'
import * as dotenv from 'dotenv';

dotenv.config();
@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
        private jwtService: JwtService
    ) { }

    async getAllUsers(): Promise<User[]> {  // 모든 유저 가져오기
        return await this.userRepository.find()
    }
    signUp(createUserDto: CreateUserDto): Promise<User> { // 유저 생성하기
        return this.userRepository.signUp(createUserDto)
    }
    getUserById(id: number): Promise<User> { //특정 유저 찾기
        return this.userRepository.getUserById(id)
    }

    deleteUser(id: number): Promise<void> { // 특정 유저 삭제
        return this.userRepository.deleteUser(id)
    }

    updateUserStatus(id: number, status: UserStatus): Promise<User> { // 유저 상태 업데이트
        return this.userRepository.updateUserStatus(id, status)
    }

    async signIn(userLoginDto: UserLoginDto, res: Response): Promise<{ accessToken: string }> {
        const { userid, password } = userLoginDto
        const user = await this.userRepository.findOne({ userid })

        if (user && (await bcrypt.compare(password, user.password))) {
            const payload = { userid }
            const accessToken = await this.jwtService.sign(payload)
            res.cookie('accessToken', accessToken, { httpOnly: true, domain: process.env.DATABASE_HOST, path: '/' })
            return { accessToken: accessToken }
        } else {
            throw new UnauthorizedException('login failed')
        }
        // return this.userRepository.signIn(userLoginDto)
    }
}
