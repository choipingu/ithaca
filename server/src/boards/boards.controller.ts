import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';

// nest g controller boards --no-spec
@Controller('boards')
export class BoardsController {
    constructor(private boardsService: BoardsService) { }

    @Get() // 모든 게시물 가져오기
    getAllBoard(): Board[] {
        return this.boardsService.getAllBoards()
    }

    /* 
    @Post()
    createBoard(@Body() body){
        console.log('body',body)
    } 
    */

    @Post() //게시물 생성
    @UsePipes(ValidationPipe) //핸들러 파이프
    createBoard(
        @Body() createBoardDto: CreateBoardDto
    ): Board {
        return this.boardsService.createBoard(createBoardDto)
    }

    @Get('/:id') //특정 게시물 가져오기
    getBoardById(@Param('id') id: string): Board {
        return this.boardsService.getBoardById(id)
    }

    @Delete('/:id') //특정 게시물 삭제하기
    deleteBoard(@Param('id') id: string): void {
        this.boardsService.deleteBoard(id)
    }

    @Patch('/:id/status') // 게시물 상태 업데이트하기
    updateBoardStatus(
        @Param('id') id: string,
        @Body('status', BoardStatusValidationPipe) status: BoardStatus
    ) {
        return this.boardsService.updateBoardStatus(id,status)
    }

}
