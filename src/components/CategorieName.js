import { useEffect, useState } from "react";
import { FadeText } from "./FadeText";

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
        <FadeText text={nomeCategoria} />

    )
}