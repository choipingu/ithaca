import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardsModule } from './boards/board.module';
import { typeORMConfig } from './boards/configs/typeorm.config';
import { UsersModule } from './users/user.module';


@Module({
  imports: [BoardsModule, UsersModule,TypeOrmModule.forRoot(typeORMConfig)],
})
export class AppModule {}
