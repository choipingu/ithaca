import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './user.controller';
import { UserRepository } from './user.repository';
import { UsersService } from './user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserRepository])
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
