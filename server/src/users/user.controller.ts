import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto, UserLoginDto } from './dto/user.dto';
import { UserStatusValidationPipe } from './pipes/user-status-validation.pipe';
import { User } from './user.entity';
import { UserStatus } from './user-status-validation';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Get()
    getAllUser(): Promise<User[]> { //모든 유저 불러오기
        return this.userService.getAllUsers()
    }

    @Post('/signup') // 유저 생성하기
    signUp(
        @Body(ValidationPipe) createUserDto: CreateUserDto
    ): Promise <User> {
        return this.userService.signUp(createUserDto)
    }

    @Get('/:id') // 특정 유저 불러오기
    getUserById(@Param('id') id:number):Promise<User>{
        return this.userService.getUserById(id)
    }

    @Delete('/:id') //특정 유저 삭제하기
    deleteUser(@Param('id', ParseIntPipe) id:number): Promise<void>{
        return this.userService.deleteUser(id)
    }

    @Patch('/:id/status') // 유저 상태 업데이트
    updateUserStatus(
        @Param('id',ParseIntPipe) id:number,
        @Body('status', UserStatusValidationPipe) status: UserStatus
    ) : Promise<User>{
        return this.userService.updateUserStatus(id,status)
    }

    @Post('signin') // 유저 로그인
    signIn(@Body(ValidationPipe) userLoginDto:UserLoginDto): Promise<{accessToken:string}>{
        return this.userService.signIn(userLoginDto)
    }
}
