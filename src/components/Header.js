import styled from "styled-components"
import { Logo } from "../images/yourdress"

const DivHeader = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100vw;
padding: 30px;
`
export const Header = () => {
    return (
        <DivHeader>
            <Logo />
        </DivHeader>

    )
}