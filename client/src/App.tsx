import styled from 'styled-components';
import SignUp from './pages/signup';
import Post from './pages/post';
import Nav from './components/nav';
import Main from './pages/main';
import Mypage from './pages/mypage';
import Login from './pages/login';
import Footer from './components/footer';
import { Routes, BrowserRouter, Route } from 'react-router-dom'
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 94.6vh;
  
`


function App() {



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
