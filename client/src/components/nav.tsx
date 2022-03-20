import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { faCoffee, faUser, faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 70px;
    justify-content: space-around;
    align-items: center;
    background-color: #2e4361;
`
const Logo = styled.div`
    font-size: 1.5rem;
    
    :hover{
        cursor: pointer;
    }
`

const Menu = styled.ul`
    display: flex;
    list-style: none;
    padding-left: 0;
`
const MenuLi = styled.li`
    font-size: 1.2rem;
    padding: 8px 12px;
`
const Icon = styled.ul`
    display: flex;
    font-size: 1.5rem;    
    padding: 8px 12px;
`
const IconLi = styled.li`
    font-size: 1.2rem;
    padding: 8px 12px;
`

function Nav() {



    return (
        <Container>
            <Link to='/'><Logo><FontAwesomeIcon icon={faCoffee} color='white' /></Logo></Link>
            <Menu>
                <MenuLi><Link to='/signup'>SignUp</Link></MenuLi>
                <MenuLi><Link to='/post'>Post</Link></MenuLi>
            </Menu>
            <Icon>
                <IconLi><Link to='login'><FontAwesomeIcon icon={faRightToBracket} color='white' /></Link></IconLi>
                <IconLi><Link to='/mypage'><FontAwesomeIcon icon={faUser} color='white' /></Link></IconLi>
            </Icon>
        </Container>
    )
}

export default Nav