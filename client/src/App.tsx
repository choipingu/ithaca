import styled from 'styled-components';
import SignUp from './pages/signup';
import Post from './pages/post';
import Nav from './components/nav';
import Main from './pages/main';
import Mypage from './pages/mypage';
import Login from './pages/login';
import { Routes, BrowserRouter, Route } from 'react-router-dom'
const Container = styled.div`
  

  
`
//have to study flex


function App() {



  return (
    <Container>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/mypage' element={<Mypage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/post' element={<Post />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
