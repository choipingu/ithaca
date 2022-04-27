import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardModule } from './boards/board.module';
import { typeORMConfig } from './configs/typeorm.config';
import { UserModule } from './users/user.module';


@Module({
  imports: [BoardModule, UserModule,TypeOrmModule.forRoot(typeORMConfig)],
})
export class AppModule {}
