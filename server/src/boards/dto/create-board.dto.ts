export class CreateBoardDto {
    title: string
    description: string
}


// dto에서 클래스 사용 이유는 인터페이스와 다르게 런타임에서 작동하기 때문에 파이프 같은 기능을 이용할 때 더 유용함