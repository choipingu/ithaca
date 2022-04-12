import { Body, Controller, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
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
    @Patch('/:id')
    updateUserStatus(
        @Param('id') id:string,
        @Body('status') status: UserStatus
    ) {
        return this.usersService.updateUserStatus(id,status)
    }

}
