import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { BoardStatus } from './board-status.enum';
import { Board } from './board.entity';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';

// nest g controller boards --no-spec
@Controller('board')
@UseGuards(AuthGuard())
export class BoardController {
    constructor(private boardService: BoardService) { }

    @Get() // 모든 게시물 가져오기
    getAllBoard(): Promise<Board[]> {
        return this.boardService.getAllBoards()
    }

    @Post() //게시물 생성
    @UsePipes(ValidationPipe) //핸들러 파이프
    createBoard(
        @Body() createBoardDto: CreateBoardDto
    ): Promise<Board> {
        return this.boardService.createBoard(createBoardDto)
    }

    @Get('/:id') //특정 게시물 가져오기
    getBoardById(@Param('id') id: number): Promise<Board> {
        return this.boardService.getBoardById(id)
    }

    @Delete('/:id') //특정 게시물 삭제하기
    deleteBoard(@Param('id', ParseIntPipe) id:number): Promise<void> {
        return this.boardService.deleteBoard(id)
    }

    @Patch('/:id/status') // 게시물 상태 업데이트하기
    updateBoardStatus(
        @Param('id', ParseIntPipe) id:number,
        @Body('status', BoardStatusValidationPipe) status: BoardStatus
    ) {
        return this.boardService.updateBoardStatus(id,status)
    }

}
