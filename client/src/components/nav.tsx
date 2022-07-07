import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { faCoffee, faUser, faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 70px;
    justify-content: space-between;
    align-items: center;
    background-color: #2e4361;
`
const Logo = styled.div`
    font-size: 1.5rem;
    margin-left: 40px;
    :hover{
        cursor: pointer;
    }
`

const Icon = styled.ul`
    display: flex;
    font-size: 1.5rem;    
    padding: 8px 20px;
`
const IconLi = styled.li`
    font-size: 1.2rem;
    padding: 8px 20px;
`

function Nav() {



    return (
        <Container>
            <Link to='/'><Logo><FontAwesomeIcon icon={faCoffee} color='white' /></Logo></Link>
            <Icon>
                <IconLi><Link to='/login'><FontAwesomeIcon icon={faRightToBracket} color='white' /></Link></IconLi>
                <IconLi><Link to='/mypage'><FontAwesomeIcon icon={faUser} color='white' /></Link></IconLi>
            </Icon>
        </Container>
    )
}

export default Nav