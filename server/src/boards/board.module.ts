import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardRepository } from './board.repository';
import { BoardController } from './board.controller';
import { BoardService } from './board.service';
import { UserModule } from 'src/users/user.module';

// nest g module boards --no-spec
//nest : using nestcli
//g : generate (사용한다)
//--no-spec : 테스트 코드 생성 안함
@Module({
  imports: [
    TypeOrmModule.forFeature([BoardRepository]),
    UserModule
  ],
  controllers: [BoardController],
  providers: [BoardService]
})
export class BoardModule {}
