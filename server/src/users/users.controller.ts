import { Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService:UsersService){}

    @Get()
    getAllUser(){
        return this.usersService.getAllUsers()
    }
    @Post()
    addUser(){
        return this.usersService.addUsers()
    }
}
