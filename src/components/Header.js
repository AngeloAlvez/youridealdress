import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { Logo } from "../images/yourdress"
import { goToLastPage, goToForm } from "../routers/cordinator"

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
`

const ButtonForm = styled.button`
position: absolute;
top: 34px;
right: 34px;
`
export const Header = () => {
    const navigate = useNavigate()
    const buttonText = window.location.pathname !== '/'
    const buttonForm = window.location.pathname !== '/sendDress'


    return (
        <DivHeader>

            {buttonText && <ButtonBack onClick={() => goToLastPage(navigate)}> voltar</ButtonBack>}
            <Logo />
            {buttonForm && <ButtonForm onClick={() => goToForm(navigate)}>form</ButtonForm>}

        </DivHeader>

    )
}
