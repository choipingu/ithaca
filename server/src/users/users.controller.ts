import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserStatusValidationPipe } from './pipes/user-status-validation.pipe';
import { User, UserStatus } from './user.model';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Get()
    getAllUser(): User[] { //모든 유저 불러오기
        return this.usersService.getAllUsers()
    }
    @Post() // 유저 생성하기
    @UsePipes(ValidationPipe)
    createUser(
        @Body() createUserDto: CreateUserDto
    ): User {
        return this.usersService.createUser(createUserDto)
    }
    @Get('/:id') // 특정 유저 불러오기
    getUserById(@Param('id') id:string):User{
        return this.usersService.getUserById(id)
    }

    @Delete('/:id') //특정 유저 삭제하기
    deleteUser(@Param('id') id:string): void{
        this.usersService.deleteUser(id)
    }

    @Patch('/:id/status') // 유저 상태 업데이트
    updateUserStatus(
        @Param('id') id:string,
        @Body('status', UserStatusValidationPipe) status: UserStatus
    ) {
        return this.usersService.updateUserStatus(id,status)
    }

}
