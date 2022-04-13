import { Body, Controller, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserStatusValidationPipe } from './pipes/user-status-validation.pipe';
import { User, UserStatus } from './user.model';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { }

    @Get()
    getAllUser(): User[] {
        return this.usersService.getAllUsers()
    }
    @Post()
    @UsePipes(ValidationPipe)
    createUser(
        @Body() createUserDto: CreateUserDto
    ): User {
        return this.usersService.createUser(createUserDto)
    }
    @Get('/:id')
    getUserById(@Param('id') id:string):User{
        return this.usersService.getUserById(id)
    }

    @Patch('/:id/status')
    updateUserStatus(
        @Param('id') id:string,
        @Body('status', UserStatusValidationPipe) status: UserStatus
    ) {
        return this.usersService.updateUserStatus(id,status)
    }

}
