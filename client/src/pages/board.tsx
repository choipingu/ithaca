//게시판 보기 
import react, { useEffect } from 'react'
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { URL } from '../url'
import { RootState } from '../store'
import { useAppSelector, useAppDispatch } from '../store/hooks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';



const MainContainer = styled.div`
margin-top: 7%;
display: flex;
text-align: center;
flex-direction: column;
width: 100%;
@media ${(props) => props.theme.mobile}{
  margin-top: 30%;
} 
.btn {
    text-decoration-line: none;
    &:hover {
      cursor: pointer;
      outline: none;
      color: black;
    }
}
`



const BoardWrap = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;

@media ${(props) => props.theme.mobile}{
    
}


`

const BoardName = styled.div`
width: 55%;
display: flex;
align-items: center;
text-align: left;
font-size: 30px;
@media ${(props) => props.theme.mobile}{
  font-size: 27px;
} 
`

const ChildBoard = styled.div`
display: flex;
flex-direction: column;
width: 100%;
margin-top: 1%;
align-items: center;
text-align: center;
margin-bottom: 2%;
`

const ContentWrap = styled.div`
display: flex;
justify-content: center;
width: 55%;
align-items: center;
margin: 0.5%;
@media ${(props) => props.theme.mobile}{
  width: 70%;
  margin-left: 25%;
} 
`


const PageNavWrap = styled.div`
display: flex;
justify-content: center;
align-items: center;
outline: none;
`

const PageSec = styled.button`
background: green;
margin: 5% ;
`

const WritingBtn = styled.div`
  text-decoration-line: none;
  outline: none;
  color: black;
  font-size: 26px;
  &:hover {
    cursor: pointer;
    color: black;
  }
`

const NameSec = styled.div`
width: 80%;
font-weight: bold;
`

const SearchingWrap = styled.div`
width: 40%;
display: flex;
align-items: center;
justify-content: flex-end;
@media ${(props) => props.theme.mobile}{
  width: 100px;
  justify-content: space-between;
} 

`

const InputWrap = styled.input`

  border: 2px solid black;
  border-radius: 15px;
  background: none;
  font-size: 16px;
  font-weight: 400;
  outline: 0;
  @media ${(props) => props.theme.mobile}{
   width: 140px;
}  
 
`

const SearchBtn = styled.button`
  background: none;
  left: 0;
  height: 50px;
  width: 50px;
  padding: 0;
  outline: 0;
  border: 0;
  color: black;
  @media ${(props) => props.theme.mobile}{
    margin-left: 7px;
} 
  &:hover,:focus {
      cursor: pointer;
      outline: none;
      transform: scale(1.05);
  }
`
function Board(props: any): JSX.Element {
    const isLogin = useAppSelector((state: RootState) => state.info.login)
    //역시 axios로 해당 게시판 글들 긁어와서 렌더링 query값이 없으면 기본 1페이지, query로 페이지 생각
    const config = {
        headers: {
            'Content-Type': 'application/json'
        },
        withCredentials: true
    };

    const [loading, setLoading] = useState(false);
    const [contentlist, setList] = useState([]);
    const [nowpage, setPage] = useState(1); //페이지
    const [searching, setSearchWord] = useState('') //검색어
    const [inputInfo, setInputInfo] = useState('')
    const [maxpage, setMax] = useState(1)

    const [pageChanged, setPageChanged] = useState(false);





    const handleInput = (event: react.ChangeEvent<HTMLInputElement>) => {
        setInputInfo(event.target.value)
    }

    const handleSubmit = () => {
        // console.log(inputInfo)
        setSearchWord(inputInfo)
    }

    const handlePage = (el: number) => {
        setPage(el)
        // console.log(nowpage)

    }

    const pagehandler = () => {
        setPageChanged(true)
    }

    useEffect(() => {
        setLoading(true);
        setPageChanged(false);
        setLoading(false)

    }, [pageChanged, searching, nowpage])




    return (
        <MainContainer>
            <BoardWrap>
                <BoardName>
                    <NameSec>{ } </NameSec>
                    <SearchingWrap>
                        <InputWrap type='search' onChange={handleInput} />
                        <SearchBtn onClick={handleSubmit}><FontAwesomeIcon className='icon' icon={faSearch} size='2x' /></SearchBtn>
                    </SearchingWrap>
                </BoardName>
                <ChildBoard>
                </ChildBoard>
            </BoardWrap>
            <PageNavWrap>
            </PageNavWrap>
        </MainContainer>
    )

}

export default Board;