import styled from "styled-components"
import { goToCategories } from "../routers/cordinator"
import { useNavigate } from 'react-router-dom';

const DivCard = styled.a`
display: flex;
flex-direction: column;
align-items: center;
width: 135px;
margin: 10px 15px;
text-decoration: none;
color:black;
`
const Img = styled.img`
width: 135px;
margin: 0;
padding: 0;
`
const Crop = styled.div`
width: 135px;
height:170px;
overflow: hidden;
`

const Title = styled.h4`
margin: 0px;
font-family: 'EB Garamond', serif;
font-weight: 400;
font-size: 20px;
text-align: center;
`

export const Card = (props) => {
    const navigate = useNavigate()

    return (
        <DivCard href={props.link}>

            <Crop>
                {props.categoria ? <Img onClick={() => goToCategories(navigate, props.categoria)} src={props.image} /> : <Img src={props.image} />}
            </Crop>

            <Title>{props.text}</Title>
        </DivCard>
    )


}