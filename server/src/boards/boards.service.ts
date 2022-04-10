import { Injectable, NotFoundException } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid} from 'uuid' // 데이터베이스에서는 자동으로 유니크값을 넣어주지만 로컬에선 넣어줄수 없으므로 uuid라는 패키지를 받아서 사용
import { CreateBoardDto } from './dto/create-board.dto';

// nset g service boards --no-spec
// Injectable 를 사용하게 되면 에플리케이션 전체에서 사용될수 있음 예를들어 컨트롤 A에서 사용되던 서비스를 컨트롤 B에도 같은 서비스를 사용할수 있게 한다
@Injectable()
export class BoardsService {
    private boards:Board[] = [] //private를 사용한 이유는 다른 컴포넌트에서 수정을 할수 있기 때문에 차단하기 위해 사용

    getAllBoards(): Board[]{ // 모든 게시물 가져오기
        return this.boards
    }

    createBoard(createBoardDto : CreateBoardDto){ // 게시물 생성
        const {title, description} = createBoardDto
        const board :Board= {
            id: uuid(),
            title,
            description,
            status: BoardStatus.PUBLIC
        }
        this.boards.push(board)
        return board
    }
    getBoardById(id:string): Board{ //특정 게시물 찾기
        const found = this.boards.find((board)=> board.id ===id)

        if(!found){
            throw new NotFoundException(`Can't find Board with id ${id}`)
        }
        return found
    }
    deleteBoard(id:string):void{ // 특정 게시물 삭제
        const found = this.getBoardById(id)
        this.boards=this.boards.filter((board)=> board.id !== found.id)
    }
    updateBoardStatus(id: string , status: BoardStatus): Board{ // 게시물 상태 업데이트
        const board = this.getBoardById(id)
        board.status=status
        return board

    }
}
