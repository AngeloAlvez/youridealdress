import { useEffect, useState } from "react";
import styled from "styled-components";
import '../styles/global.css';
import Fade from '@mui/material/Fade';
import Zoom from '@mui/material/Zoom';

const H2 = styled.h2`
font-family: 'EB Garamond', serif;
font-weight: 400;
font-size: 28px;
letter-spacing: 10px;
text-align: center;
color: gray;
`

export const CategorieName = (props) => {
    const [nomeCategoria, setNomeCategoria] = useState('')

    useEffect(() => {
        switch (props.name) {
            case 'festa':
                setNomeCategoria('glamour')
                break;
            case 'casual':
                setNomeCategoria('casual')
                break;
            case 'fofo':
                setNomeCategoria('cute')
                break;
            case 'elegante':
                setNomeCategoria('elegant')
                break;
            case 'sensual':
                setNomeCategoria('hot')
                break;
            case 'casamento':
                setNomeCategoria('wedding')
                break;
            default:
                console.log('default');
        }
    }, []);

    return (
        <Zoom in={true} transitionDelay='2000ms' >
            <H2 className='fade-in-text'>{nomeCategoria}</H2>
        </Zoom >


    )
}