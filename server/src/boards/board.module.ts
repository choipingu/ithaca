import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardRepository } from './board.repository';
import { BoardsController } from './board.controller';
import { BoardsService } from './board.service';

// nest g module boards --no-spec
//nest : using nestcli
//g : generate (사용한다)
//--no-spec : 테스트 코드 생성 안함
@Module({
  imports: [
    TypeOrmModule.forFeature([BoardRepository])
  ],
  controllers: [BoardsController],
  providers: [BoardsService]
})
export class BoardsModule {}