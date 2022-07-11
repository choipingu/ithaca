import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ImHome } from "react-icons/im"
import { BsBookmarkStarFill as BookMark } from "react-icons/bs"
import { BiBookOpen as BookList } from "react-icons/bi"


const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #2e4361;
    width: 11%;
`
const Logo = styled.div`
    font-size: 1.5rem;
    
    :hover{
        cursor: pointer;
    }
`

const Menu = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    padding-left: 0;
    
`
const MenuLi = styled.li`
    font-size: 16px;
    padding: 15px 15px 15px 15px;
    border-bottom: 1px solid gray;
    :hover{
        cursor: pointer;
        background-color: #4b6385;
    }
`
const Space = styled.a`
    margin-left: 5px;
`

function Nav() {



    return (
        <Container>
            <Menu>
                <Link to='/'><MenuLi><ImHome color='white' /><Space>홈</Space></MenuLi></Link>
                <Link to='/post'><MenuLi><BookMark color='white' /><Space>추천도서</Space></MenuLi></Link>
                <Link to='/post'><MenuLi><BookList color='white' /><Space>도서목록</Space></MenuLi></Link>
            </Menu>
        </Container>
    )
}

export default Nav