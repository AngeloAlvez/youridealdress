import styled from "styled-components"


const DivCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 135px;
margin: 10px 15px;
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
    return (
        <DivCard>
            <Crop>
                <Img src={props.image} />
            </Crop>

            <Title>{props.text}</Title>
        </DivCard>
    )


}