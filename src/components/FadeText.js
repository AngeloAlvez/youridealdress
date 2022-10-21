import styled from 'styled-components';
import '../styles/global.css';

const H2 = styled.h2`
font-family: 'EB Garamond', serif;
font-weight: 400;
font-size: 28px;
letter-spacing: 5px;
text-align: center;
color: gray;
`

export const FadeText = (props) => {
    return (
        <H2 className='fade-in-text' >{props.text}</H2>
    )
}