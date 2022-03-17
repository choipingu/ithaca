import styled from 'styled-components';
import SignUp from "./pages/signup";
import Post from "./pages/post";
import Nav from './components/nav';

const Container = styled.div`
  display: flex;
  

  
`
//have to study flex


function App() {

  
  
  return (
    <Container>
      <Nav />
      <SignUp />
      <Post />
    </Container>
  );
}

export default App;
