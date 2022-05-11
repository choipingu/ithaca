import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import { URL } from '../url'


const LoginWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: whitesmoke;
`;
const LoginContainer = styled.div`
  width: 300px;
  height: 570px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  border: 2px solid #F1F1F1;
  .img {
    height: 250px;
  }
  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .signup {
    cursor: pointer;
    background-color: white;
    border: 0;
    outline: 0;
    font-size: 1em;
    color: #666;
    margin-bottom: 10px;
  }
  .signup:hover {
    color: #34495E;
  }
`;

const InputWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 10px;
  text-align: center;
`;

const LoginInput = styled.input`
  border: 2px solid #F1F1F1;
  border-radius: 7px;
  height: 40px;
  width: 250px;
  font-size: 16px;
  margin-bottom: 3px;
`;

const FloatingText = styled.div`
  text-align: center;
  color: #C4C4C4;
  line-height: 40px;
`;

const LoginButton = styled.button`
    width: 80%;
    height: 2.5rem;
    border: none;
    border-radius: 10px;
    background-color: #34495E;
    color: #ffffff;
    font-weight: 700;
    font-size: 0.9em;
    transition: all 0.5s;
    &:hover,:focus {
      cursor: pointer;
      outline: none;
      transform: scale(1.05);
      background-color: #000;
    }
`;

const GithubButton = styled.button`
    width: 80%;
    height: 2.5rem;
    border: none;
    border-radius: 10px;
    background-color: #FEE521;    
    color: #ffffff;
    font-weight: 700;
    transition: all 0.5s;
    &:hover,:focus {
      cursor: pointer;
      outline: none;
      transform: scale(1.05);
    }
    .cacao {
      height: 2.45rem;
    }
`;

function Login() {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  };

  const navigate = useNavigate();

  const [inputInfo, setInputInfo] = useState({
    userid: '',
    password: ''
  });

  const handleInput = (event: { target: { placeholder: string; value: any; }; }) => {
    if (event.target.placeholder === 'userid') {
      setInputInfo({ ...inputInfo, userid: event.target.value });
    }
    if (event.target.placeholder === 'password') {
      setInputInfo({ ...inputInfo, password: event.target.value });
    }
  };

  const handleSubmit = (event: any) => {
    console.log(event.target);
    if (event.target.className.includes('loginBtn')) {
      axios.post(`${URL}/user/signin`, { userid: inputInfo.userid, password: inputInfo.password }, config)
        .then(el => {
          navigate('/');
        }).catch(err => console.log(err))
    }
    if (event.target.className.includes('githubBtn')) {
      window.location.assign('https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=da4e288805f2fb1fe0efa41cb629944f&redirect_uri=http://practice-bucket-depolyman1.s3-website.ap-northeast-2.amazonaws.com/callback');
    }
    if (event.target.className.includes('cacao')) {
      window.location.assign('https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=da4e288805f2fb1fe0efa41cb629944f&redirect_uri=http://practice-bucket-depolyman1.s3-website.ap-northeast-2.amazonaws.com/callback');
    }
    if (event.target.className === 'signup') {
      navigate('/signup');
    }
  };

  return (
    <LoginWrap>
      <LoginContainer>
        <img src='img/ithaca.png' alt='logo' className='img' />
        <InputWrap>
          <LoginInput type='text' placeholder='userid' onChange={handleInput} />
          <LoginInput type='password' placeholder='password' onChange={handleInput} />
        </InputWrap>
        <br />
        <button className='signup' onClick={handleSubmit}>아직 계정이 없습니까?</button>
        <LoginButton className='loginBtn' onClick={handleSubmit}>Login</LoginButton>
        <FloatingText>──────   또는   ──────</FloatingText>
        <GithubButton className='githubBtn' onClick={handleSubmit}><img src='img/kakao.png' alt='logo' className='cacao' onClick={handleSubmit} /></GithubButton>
      </LoginContainer>
    </LoginWrap>
  );
}
// client/public/images/kakao.png
export default Login;
