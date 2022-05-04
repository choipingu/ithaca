import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import { v1 as uuid} from 'uuid' // 데이터베이스에서는 자동으로 유니크값을 넣어주지만 로컬에선 넣어줄수 없으므로 uuid라는 패키지를 받아서 사용
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardRepository } from './board.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from './board.entity';
import { User } from 'src/users/user.entity';

// nset g service boards --no-spec
// Injectable 를 사용하게 되면 에플리케이션 전체에서 사용될수 있음 예를들어 컨트롤 A에서 사용되던 서비스를 컨트롤 B에도 같은 서비스를 사용할수 있게 한다
@Injectable()
export class BoardService {
    constructor(
        @InjectRepository(BoardRepository)
        private boardRepository: BoardRepository
        ){}

    async getAllBoards(): Promise<Board[]>{ // 모든 게시물 가져오기
        return await this.boardRepository.find()
    }

    createBoard(createBoardDto : CreateBoardDto, user:User): Promise<Board>{ // 게시물 생성
        return this.boardRepository.createBoard(createBoardDto,user)
    }
    getBoardById(id:number): Promise <Board>{ //특정 게시물 찾기
        return this.boardRepository.getBoardById(id)       
    }
    deleteBoard(id:number): Promise <void>{ // 특정 게시물 삭제
        return this.boardRepository.deleteBoard(id)
    }
    updateBoardStatus(id: number , status: BoardStatus): Promise<Board>{ // 게시물 상태 업데이트
        return this.boardRepository.updateBoardStatus(id,status)
    }
}
