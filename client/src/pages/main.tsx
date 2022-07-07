import styled from "styled-components"
const Container = styled.div`
    flex: 1;
    background-color: #FBF7F2;
    
`
const Title = styled.div`
    justify-content: center;
    align-items: center;
    padding-right: 100px;
    display: flex;
`
const SubTitle = styled.div`
    font-size: 30px;
    font-weight: bolder;
`
const SubTitle2 = styled.div`
    font-size: 20px;
`



function Main() {



    return (
        <Container>
            <Title>
                <SubTitle>북카페 이타카 입니다.<SubTitle2>도서현황을 확인 할 수 있습니다.</SubTitle2></SubTitle>
                <img src='img/ithaca.png' alt="logo" width={500}></img>
            </Title>
        </Container>


    )
}

export default Main