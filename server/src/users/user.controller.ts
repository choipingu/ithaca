import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserStatusValidationPipe } from './pipes/user-status-validation.pipe';
import { User } from './user.entity';
import { UserStatus } from './user-status-validation';
import { UsersService } from './user.service';

@Controller('user')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Get()
    getAllUser(): Promise<User[]> { //모든 유저 불러오기
        return this.usersService.getAllUsers()
    }

    @Post('/signup') // 유저 생성하기
    @UsePipes(ValidationPipe)
    createUser(
        @Body() createUserDto: CreateUserDto
    ): Promise <User> {
        return this.usersService.createUser(createUserDto)
    }

    @Get('/:id') // 특정 유저 불러오기
    getUserById(@Param('id') id:number):Promise<User>{
        return this.usersService.getUserById(id)
    }

    @Delete('/:id') //특정 유저 삭제하기
    deleteUser(@Param('id', ParseIntPipe) id:number): Promise<void>{
        return this.usersService.deleteUser(id)
    }

    @Patch('/:id/status') // 유저 상태 업데이트
    updateUserStatus(
        @Param('id',ParseIntPipe) id:number,
        @Body('status', UserStatusValidationPipe) status: UserStatus
    ) : Promise<User>{
        return this.usersService.updateUserStatus(id,status)
    }

}
