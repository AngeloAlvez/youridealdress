import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { Logo } from "../images/yourdress"
import { goToLastPage, goToForm } from "../routers/cordinator"
import { SlArrowLeft, SlTag } from "react-icons/sl";


const DivHeader = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
padding: 30px;
`
const ButtonBack = styled.button`
position: absolute;
top: 34px;
left: 34px;
background-color: white;
border: none;
font-size: 20px;
`

const ButtonForm = styled.button`
position: absolute;
top: 34px;
right: 34px;
background-color: white;
border: none;
font-size: 20px;
`
export const Header = () => {
    const navigate = useNavigate()
    const buttonText = window.location.pathname !== '/'
    const buttonForm = window.location.pathname !== '/sendDress'


    return (
        <DivHeader>

            {buttonText && <ButtonBack onClick={() => goToLastPage(navigate)}> <SlArrowLeft /></ButtonBack>}
            <Logo />
            {buttonForm && <ButtonForm onClick={() => goToForm(navigate)}><SlTag /></ButtonForm>}

        </DivHeader >

    )
}
