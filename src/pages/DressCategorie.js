import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { Card } from '../components/Card';
import { useParams } from 'react-router-dom';
import { DivCategories, Main } from './HomePage';
import { Header } from '../components/Header';
import '../styles/global.css';
import { CategorieName } from '../components/CategorieName';

const Img = styled.img`
  width: 50px;
`
const DivButton = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  margin: 20px;
 
`
const Button = styled.button`
  cursor: pointer;
  margin: 6px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  ${({ border }) => (border ? `border: ${border} ` : 'border:none ')};
  ${({ color }) => color && `background-color: ${color} `};
  &:hover{
    transform: scale(1.2);
    transition:0.2s;
  }&:active{
     transform: translateY(0);
     transform: translateY(10px);
     transition:0.2s;
  }
`

const ButtonGradient = styled.button`
  cursor: pointer;
  margin: 6px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  ${({ border }) => (border ? `border: ${border} ` : 'border:none ')};
  background: rgb(236,166,254);
  background: linear-gradient(55deg, rgba(236,166,254,1) 23%, rgba(217,88,88,1) 39%, rgba(108,145,240,1) 58%, rgba(161,237,154,1) 75%, rgba(255,255,255,1) 92%);
  &:hover{
    transform: scale(1.2);
    transition:0.2s;
  }&:active{
     transform: translateY(0);
     transform: translateY(10px);
     transition:0.2s;
  }
`
const Colors = styled.h4`
font-family: 'EB Garamond', serif;
font-weight: 400;
font-size: 20px;
letter-spacing: 2px;
width: 100%;
text-align: left;
margin:0 0 -10px 85px;

`

export const DetailsDress = (props) => {
  const { id } = useParams();
  const [dress, setDress] = useState(null);
  const [filtro, setfiltro] = useState('');

  useEffect(() => {
    axios
      .get(`https://backend-amaro.herokuapp.com/products/${id}`)
      .then((response) => {
        setDress(response.data);
      });
  }, []);

  if (!dress) return null;
  const todos = dress.map((vestido) => {
    return (
      <>
        <Card text={vestido.name} image={vestido.image} link={vestido.url} />
      </>
    );
  });

  const filtrados = dress.map((vestido) => {
    if (vestido.color === filtro) {
      return (
        <>
          <Card text={vestido.name} image={vestido.image} link={vestido.url} />
        </>
      );
    }
    return false;
  });

  return (
    <Main>


      <Header />
      <CategorieName name={id} />
      <Colors>colors:</Colors>
      <DivButton>
        <ButtonGradient
          className={filtro === '' && 'active'}
          onClick={() => setfiltro('')}
        />
        <Button
          className={filtro === 'branco' ? 'active' : null}
          border="1px solid black"
          color="white"
          onClick={() => setfiltro('branco')}
        />
        <Button
          className={filtro === 'verde' ? 'active' : null}
          color="#a1ed9a"
          onClick={() => setfiltro('verde')}
        />
        <Button
          className={filtro === 'rosa' ? 'active' : null}
          color="#eca6fe"
          onClick={() => setfiltro('rosa')}
        />
        <Button
          className={filtro === 'azul' ? 'active' : null}
          color="#6c91f0"
          onClick={() => setfiltro('azul')}
        />
        <Button
          className={filtro === 'vermelho' ? 'active' : null}
          color="#d95858"
          onClick={() => setfiltro('vermelho')}
        />
        <Button
          className={filtro === 'preto' ? 'active' : null}
          color="#363434"
          onClick={() => setfiltro('preto')}
        />
      </DivButton>
      <DivCategories>

        {filtro ? filtrados : todos}
      </DivCategories>
    </Main>
  );
};
