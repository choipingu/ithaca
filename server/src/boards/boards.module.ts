import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';

// nest g module boards --no-spec
//nest : using nestcli
//g : generate (사용한다)
//--no-spec : 테스트 코드 생성 안함
@Module({
  controllers: [BoardsController],
  providers: [BoardsService]
})
export class BoardsModule {}
