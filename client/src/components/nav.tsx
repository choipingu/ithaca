import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { faCoffee, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
    display: flex;
    top:0;
    left: 0;
    right: 0;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    background-color: #263343;
`
const Logo = styled.div`
    font-size: 1.5rem;
    margin-left: 20px;
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
const Icon = styled.div`
    font-size: 1.5rem;
`
function Nav() {

    const home = () => {
        alert('home')
    }

    return (
        <Container>
            <Logo><FontAwesomeIcon icon={faCoffee} color='white' onClick={home} /></Logo>
            <Menu>
                <MenuLi><Link to='/signup'>SignUp</Link></MenuLi>
                <MenuLi><Link to='/post'>Post</Link></MenuLi>
            </Menu>
            <Icon><FontAwesomeIcon icon={faUser} color='white' /></Icon>
        </Container>
    )
}

export default Nav