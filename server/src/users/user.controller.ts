import { Body, Controller, Delete, Get, Logger, Param, ParseIntPipe, Patch, Post, Res, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto, UserLoginDto } from './dto/user.dto';
import { UserStatusValidationPipe } from './pipes/user-status-validation.pipe';
import { User } from './user.entity';
import { UserStatus } from './user-status-validation';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from './get-user.decorator';
import { Response } from 'express'
@Controller('user')
export class UserController {
    private logger = new Logger('userController')
    constructor(private userService: UserService) { }

    @Get()
    getAllUser(): Promise<User[]> { //모든 유저 불러오기
        return this.userService.getAllUsers()
    }

    @Post('/signup') // 유저 생성하기
    signUp(
        @Body(ValidationPipe) createUserDto: CreateUserDto
    ): Promise<User> {
        this.logger.verbose(`create user ${JSON.stringify(createUserDto)}`)
        return this.userService.signUp(createUserDto)
    }

    @Get('/:id') // 특정 유저 불러오기
    getUserById(@Param('id') id: number): Promise<User> {
        return this.userService.getUserById(id)
    }

    @Delete('/:id') //특정 유저 삭제하기
    deleteUser(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.userService.deleteUser(id)
    }

    @Patch('/:id/status') // 유저 상태 업데이트
    updateUserStatus(
        @Param('id', ParseIntPipe) id: number,
        @Body('status', UserStatusValidationPipe) status: UserStatus
    ): Promise<User> {
        return this.userService.updateUserStatus(id, status)
    }

    @Post('/signin') // 유저 로그인
    signIn(@Body(ValidationPipe) userLoginDto: UserLoginDto, @Res({ passthrough: true }) res: Response): Promise<{ accessToken: string }> {
        this.logger.log(`login user id ${JSON.stringify(userLoginDto.userid)}`)
        return this.userService.signIn(userLoginDto, res)
    }
    @Get('/test')
    @UseGuards(AuthGuard())
    test(@GetUser() user: User) {
        return user
    }
}
//@UseGuards(AuthGuard())