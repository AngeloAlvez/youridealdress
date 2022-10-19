import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { Card } from "../components/Card";
import { useParams } from "react-router-dom"
import { DivCategories } from "./HomePage";
import { Header } from "../components/Header";
const Img = styled.img`
width: 50px;
`


export const DetailsDress = (props) => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [filtro, setfiltro] = useState('')
  useEffect(() => {
    axios.get(`https://backend-amaro.herokuapp.com/products/${id}`).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  const todos = post.map((vestido) => {
    return (<>
      <Card text={vestido.name} image={vestido.image} link={vestido.url} />

    </>

    )

  })
  // const filtrados = filtro.map((vestido) => {
  //   return (<>
  //     <Card text={vestido.name} image={vestido.image} link={vestido.url} />

  //   </>

  //   )

  // })


  return (
    <>
      <Header />
      <DivCategories>
        {/* {filtro ?filtrados : todos} */}
        {todos}
      </DivCategories>


    </>

  )

};
