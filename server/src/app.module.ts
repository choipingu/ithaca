import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardsModule } from './boards/boards.module';
import { typeORMConfig } from './configs/typeorm.config';
import { UsersModule } from './users/users.module';


@Module({
  imports: [BoardsModule, UsersModule,TypeOrmModule.forRoot(typeORMConfig)],
})
export class AppModule {}
