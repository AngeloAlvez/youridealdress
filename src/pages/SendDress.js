import { Header } from "../components/Header"
import styled from "styled-components"
import { Main } from "./HomePage"
import { useState } from "react"
import axios from "axios"
import { FadeText } from "../components/FadeText"


const DivForm = styled.div`
display:flex;
flex-direction:column;
align-items:flex-start
`
const DivInput = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin: 10px 0;
`
const Label = styled.label`
margin-bottom: 10px;
font-family: 'EB Garamond', serif;
font-weight: 400;
font-size: 20px;
`
const Input = styled.input`
background-color: #F6F6F6;
width: 70vw;
height: 35px;
border-radius: 5px;
border: none;
padding-left: 6px;
@media (min-width: 769px) {
    width:30vw;
  }
`
const InputSelect = styled.select`
background-color: #F6F6F6;
width: 30vw;
height: 35px;
border-radius: 5px;
border: none;
font-family: 'EB Garamond', serif;
font-weight: 400;
font-size: 16px;
padding-left: 6px;
`
const ButtonSend = styled.button`
background-color: #F3B4B4;
color: white;
width: 100%;
font-family: 'EB Garamond', serif;
font-weight: 800;
font-size: 16px;
border-radius: 5px;
height: 35px;
border:none;
margin: 20px 0 60px;
@media (min-width: 769px) {
    width:30vw;
  }
`


export const FormSendDress = () => {
    const [name, setName] = useState('')
    const [categorie, setCategorie] = useState('casual')
    const [color, setColor] = useState('preto')
    const [image, setImage] = useState('')
    const [link, setLink] = useState('')

    const send = () => {

        const body = {
            "name": name,
            "tag": categorie,
            "url": link,
            "color": color,
            "image": image
        }
        if (name, categorie, link, color, image !== '') {
            axios.post('https://backend-amaro.herokuapp.com/product', body)
                .then((response) => {
                    alert('Vestido enviado com sucesso')
                    setName('')
                    setCategorie('casual')
                    setColor('preto')
                    setImage('')
                    setLink('')
                }, (error) => {
                    console.log(error);
                })
        } else {
            alert('Nenhum campo pode estar vazio')
        }


    }

    return (
        <Main>
            <Header />
            <FadeText text={'send your dress'} />
            <DivForm>
                <DivInput>
                    <Label>name: </Label>
                    <Input value={name} onChange={(e) => setName(e.target.value)} />
                </DivInput>
                <DivInput>
                    <Label>categorie: </Label>
                    <InputSelect value={categorie} onChange={(e) => setCategorie(e.target.value)}>
                        <option>casual</option>
                        <option>festa</option>
                        <option>elegante</option>
                        <option>fofo</option>
                        <option>sensual</option>
                        <option>casamento</option>
                    </InputSelect>
                </DivInput>
                <DivInput>
                    <Label>color: </Label>
                    <InputSelect value={color} onChange={(e) => setColor(e.target.value)}>
                        <option>preto</option>
                        <option>branco</option>
                        <option>vermelho</option>
                        <option>rosa</option>
                        <option>azul</option>
                        <option>verde</option>
                    </InputSelect>
                </DivInput>
                <DivInput>
                    <Label>image: </Label>
                    <Input value={image} onChange={(e) => setImage(e.target.value)} />
                </DivInput>
                <DivInput>
                    <Label>link: </Label>
                    <Input value={link} onChange={(e) => setLink(e.target.value)} />
                </DivInput>
                <ButtonSend className='fade-in-text' onClick={() => send()}>send us</ButtonSend>
            </DivForm>



        </Main>

    )

}

