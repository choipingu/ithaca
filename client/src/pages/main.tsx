import styled from "styled-components"
const Container = styled.div`
    /* flex: 1; */
    
`
const Title = styled.div`
    justify-content: center;
    align-items: center;
    flex-direction: column;
    display: flex;


`
const Title2 = styled.div`
    transform: translate(300px, 300px) rotate(180deg);
    transition-property: all;
    transition-duration: 2s;
    transition-delay: 1s;
`

function Main() {



    return (
        <Container>
            <Title data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-out">
                <img src='img/ithaca.png' alt="logo" width={500}></img>
                북카페 이타카 입니다.
                <Title2>ithaca</Title2>
            </Title>
        </Container>


    )
}

export default Main