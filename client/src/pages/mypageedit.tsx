import axios from 'axios';
import { URL } from '../url'
import { useState } from 'react'
import Loader from '../components/loader'
import { text } from 'stream/consumers';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../store'
import { useAppSelector, useAppDispatch } from '../store/hooks'
import styled from 'styled-components';



const Back = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: whitesmoke;
`
const Container = styled.div`
  width: 400px;
  height: 500px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  border: 2px solid #F1F1F1;

`
const MyPageEditInput = styled.input`
  border: 2px solid #F1F1F1;
  border-radius: 7px;
  height: 40px;
  width: 250px;
  margin-top: 5px;
  font-size: 16px;
`;

const ModifyButton = styled.button`
    width: 100px;
    height: 2rem;
    border: none;
    border-radius: 10px;
    background-color: #9e9e9e;
    color: #ffffff;
    font-weight: 700;
    font-size: 1em;
    transition: all 0.5s;
    margin-right: 10px;
    &:hover,:focus {
      cursor: pointer;
      outline: none;
      transform: scale(1.05);
      background-color: #000;
    }
`;
const Item = styled.div`
    width: 300px;
    font-size: 18px;
    margin-top: 15px;
    `
const InputWrap = styled.div`
display: flex;
height: 30px;



span {
    font-size: 15px;
    color: red;
    margin-bottom: 2px;
}
span.green {
    font-size: 15px;
    color: green;
}
`;

const Bb = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 50px;
    column-gap: 40px;
`

function MyPageEdit() {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();
  const [alertOpened, setAlert] = useState(false)
  const [checkInfo, setCheckInfo] = useState({
    nickname: '',
    password: '',
    checkPassword: ''
  })
  const [text, setText] = useState({
    nickname: '',
    password: '',
    checkPassword: ''
  })
  const config = {
    headers: { "Content-type": "application/json" },
    withCredentials: true
  }
  const onChange = (e: any) => {
    if (e.target.placeholder === 'nickname') {
      setCheckInfo({ ...checkInfo, nickname: e.target.value })
    }
    if (e.target.placeholder === 'password') {
      setCheckInfo({ ...checkInfo, password: e.target.value })
    }
    if (e.target.placeholder === 'checkPassword') {
      setCheckInfo({ ...checkInfo, checkPassword: e.target.value })
    }
  }
  const regNickname = /^[???-??????-??????-???a-zA-Z0-9]{2,10}$/
  const regPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,20}/
  const alerthandler = () => {
    setAlert(false)
  }

  const handleOnBlur = (e: any) => {
    if (e.target.placeholder === 'nickname') {
      if (regNickname.test(e.target.value)) {
        axios.post(`${URL}/user/check`, { nickname: checkInfo.nickname }, config)
          .then(res => {
            if (res.data.message === 'nickname already exisits') {
              setText({ ...text, nickname: '????????? ????????? ?????????' })
            } else {
              setText({ ...text, nickname: '??????????????? ????????? ?????????' })
            }
          }).catch(err => {
            console.log(err)
          })
      }
      else {
        setText({ ...text, nickname: '???????????? 2~10?????? ????????? ??????????????????.' })
      }
    }
    if (e.target.placeholder === 'password') {
      if (regPassword.test(e.target.value)) {
        setText({ ...text, password: '??????????????? ???????????? ?????????' })
      } else {
        setText({ ...text, password: '6~20??? ????????? ?????? ????????? ????????????,???????????? ??????????????? ?????????' })
      }
    }
    if (e.target.placeholder === 'checkPassword') {
      if (checkInfo.password === checkInfo.checkPassword) {
        setText({ ...text, checkPassword: '??????????????? ???????????????' })
      } else {
        setText({ ...text, checkPassword: '??????????????? ???????????? ????????????' })
      }
    }
  }

  async function fatchData() {
    if (text.nickname === '??????????????? ????????? ?????????' || text.checkPassword === '??????????????? ???????????????') { // fix please
      if (text.nickname) {
        try {
          setLoading(true)
          await axios.patch(`${URL}/user`, { nickname: checkInfo.nickname }, config)
            .then(res => {
              setLoading(false)

            })
        } catch (err) {
          console.log(err)
        }
      }
      if (text.checkPassword) {
        try {
          setLoading(true)
          await axios.patch(`${URL}/user`, { password: checkInfo.checkPassword }, config)
            .then(res => {
              setLoading(false)
            })
        } catch (err) {
          console.log(err)
        }
      }
      if (checkInfo.nickname === '' && checkInfo.password === '' && checkInfo.checkPassword === '') {
        alert('????????? ????????? ????????????')
      } else {
        setAlert(true)
        setTimeout(() => navigate('/mypage'), 1000)
      }
    }
  }
  const isOauth = useAppSelector((state: RootState) => state.info.oauth)

  // console.log(text)
  if (loading) return <Loader type="spin" color="#999999" />

  return (
    <Back>
      <Container>
        <Item>
          <Item>????????? ?????????</Item>
          <MyPageEditInput type='text' placeholder='nickname' value={checkInfo.nickname} onChange={onChange} onBlur={handleOnBlur} />
          <InputWrap>
            {text.nickname === '??????????????? ????????? ?????????'
              ?
              <span className='green'>{text.nickname}</span>
              :
              <span>{text.nickname}</span>
            }
          </InputWrap>

          {isOauth ?
            <div></div>
            : <><Item>????????? ????????????</Item>
              <MyPageEditInput type='password' placeholder='password' value={checkInfo.password} onChange={onChange} onBlur={handleOnBlur} />
              <InputWrap>
                {text.password === '??????????????? ???????????? ?????????'
                  ?
                  <span className='green'>{text.password}</span>
                  :
                  <span>{text.password}</span>
                }
              </InputWrap>

              <Item>???????????? ??????</Item>
              <MyPageEditInput type='password' placeholder='checkPassword' value={checkInfo.checkPassword} onChange={onChange} onBlur={handleOnBlur} />
              <InputWrap>
                {text.checkPassword === '??????????????? ???????????????'
                  ?
                  <span className='green'>{text.checkPassword}</span>
                  :
                  <span>{text.checkPassword}</span>
                }
              </InputWrap>
            </>}
        </Item>
        <Bb>
          <ModifyButton onClick={fatchData}>?????? ??????</ModifyButton>
          <ModifyButton onClick={() => navigate('/mypage')}>?????? ??????</ModifyButton>
        </Bb>
      </Container>
    </Back>
  );
}

export default MyPageEdit
