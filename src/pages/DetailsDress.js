import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { Card } from '../components/Card';
import { useParams } from 'react-router-dom';
import { DivCategories } from './HomePage';
import { Header } from '../components/Header';
import '../styles/global.css';
const Img = styled.img`
  width: 50px;
`;
const DivButton = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
`;
const Button = styled.button`
  cursor: pointer;
  margin: 6px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  ${({ border }) => (border ? `border: ${border} ` : 'border:none ')};
  ${({ color }) => color && `background-color: ${color} `};
`;

export const DetailsDress = (props) => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [filtro, setfiltro] = useState('');
  useEffect(() => {
    axios
      .get(`https://backend-amaro.herokuapp.com/products/${id}`)
      .then((response) => {
        setPost(response.data);
      });
  }, []);

  if (!post) return null;
  const todos = post.map((vestido) => {
    return (
      <>
        <Card text={vestido.name} image={vestido.image} link={vestido.url} />
      </>
    );
  });

  const filtrados = post.map((vestido) => {
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
    <>
      <Header />
      <DivCategories>
        <DivButton>
          <Button
            className={filtro === '' && 'active'}
            onClick={() => setfiltro('')}
          />
          <Button
            className={filtro === 'branco' ? 'active' : null}
            border="1px solid black"
            color="white"
            ativo={filtro}
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
        {filtro ? filtrados : todos}
      </DivCategories>
    </>
  );
};
