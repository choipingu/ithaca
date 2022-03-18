import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {faCoffee} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    background-color: #263343;
`

function Nav () {

    return (
        <Container>
            <FontAwesomeIcon icon={faCoffee} />
            <ul>
                <li><Link to='/signup'>SignUp</Link></li>
                <li><Link to='/post'>Post</Link></li>
            </ul>
        </Container>
    )
}

export default Nav