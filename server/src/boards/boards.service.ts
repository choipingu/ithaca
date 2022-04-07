import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardsService {
    private boards = ['1','2','3'] //private를 사용한 이유는 다른 컴포넌트에서 수정을 할수 있기 때문에 차단하기 위해 사용

    getAllBoards(){
        return this.boards
    }
}
