import logo from './logo.svg';
import './App.css';
import { Logo } from './images/yourdress';
import styled from 'styled-components';
import { Header } from './components/Header';
import imagemHomePage from './images/homepageimage.png'

const Img = styled.img`
width: 100vw;
margin: 0;
`
const Main = styled.div`
display: flex;
flex-direction: column;
align-items: center;
overflow: hidden ;
`
const Categories = styled.h3`
font-family: 'EB Garamond', serif;
font-weight: 600;
font-size: 24px;
margin: 20;
letter-spacing: 2px;
`

function App() {
  return (
    <Main>
      <Header />
      <Img src={imagemHomePage} />
      <Categories>categories</Categories>
    </Main>
  );
}

export default App;
