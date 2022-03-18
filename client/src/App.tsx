import styled from 'styled-components';
import SignUp from './pages/signup';
import Post from './pages/post';
import Nav from './components/nav';
import { Routes, BrowserRouter, Route } from 'react-router-dom'
const Container = styled.div`
  display: flex;

  
`
//have to study flex


function App() {



  return (
    <Container>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/post' element={<Post />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
