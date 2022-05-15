import styled from 'styled-components';
import SignUp from './pages/signup';
import Post from './pages/post';
import Nav from './components/nav';
import Main from './pages/main';
import Mypage from './pages/mypage';
import Login from './pages/login';
import Footer from './components/footer';
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import { Cookies } from 'react-cookie';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { URL } from './url';
import { useAppSelector, useAppDispatch } from './store/hooks'
import { setAdmin, setLogin, setNickname, setOauth } from './features/info';
import Loader from './components/loader';

const Container = styled.div`
    background: whitesmoke;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  
`


function App() {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  };
  const cookies = new Cookies();
  const accessToken = cookies.get("accessToken")
  const dispatch = useAppDispatch()
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (accessToken) {
      axios.get(`${URL}/user/test`, config)
        .then(el => {
          console.log('main', el)
          dispatch(setLogin(true))
          setLoading(false);
        }).catch(err => console.log(err))
    }
    else setLoading(false);
  }, [])

  if (loading) return <Loader type="spin" color="#999999" />

  return (
    <BrowserRouter>
      <Container>
        <Nav />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/mypage' element={<Mypage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/post' element={<Post />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
