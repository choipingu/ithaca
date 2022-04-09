import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid} from 'uuid' // 데이터베이스에서는 자동으로 유니크값을 넣어주지만 로컬에선 넣어줄수 없으므로 uuid라는 패키지를 받아서 사용
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
    private boards:Board[] = [] //private를 사용한 이유는 다른 컴포넌트에서 수정을 할수 있기 때문에 차단하기 위해 사용

    getAllBoards(): Board[]{
        return this.boards
    }

    createBoard(createBoardDto : CreateBoardDto){
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
    getBoardById(id:string): Board{
        return this.boards.find((board)=> board.id ===id)
    }
    deleteBoard(id:string):void{
        this.boards=this.boards.filter((board)=> board.id !== id)
    }
    updateBoardStatus(id: string , status: BoardStatus): Board{
        const board = this.getBoardById(id)
        board.status=status
        return board

    }
}
