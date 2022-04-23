import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import { Board } from './board.entity';
import { BoardsService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';

// nest g controller boards --no-spec
@Controller('board')
export class BoardsController {
    constructor(private boardsService: BoardsService) { }

    @Get() // 모든 게시물 가져오기
    getAllBoard(): Promise<Board[]> {
        return this.boardsService.getAllBoards()
    }

    @Post() //게시물 생성
    @UsePipes(ValidationPipe) //핸들러 파이프
    createBoard(
        @Body() createBoardDto: CreateBoardDto
    ): Promise<Board> {
        return this.boardsService.createBoard(createBoardDto)
    }

    @Get('/:id') //특정 게시물 가져오기
    getBoardById(@Param('id') id: number): Promise<Board> {
        return this.boardsService.getBoardById(id)
    }

    @Delete('/:id') //특정 게시물 삭제하기
    deleteBoard(@Param('id', ParseIntPipe) id:number): Promise<void> {
        return this.boardsService.deleteBoard(id)
    }

    @Patch('/:id/status') // 게시물 상태 업데이트하기
    updateBoardStatus(
        @Param('id', ParseIntPipe) id:number,
        @Body('status', BoardStatusValidationPipe) status: BoardStatus
    ) {
        return this.boardsService.updateBoardStatus(id,status)
    }

}
