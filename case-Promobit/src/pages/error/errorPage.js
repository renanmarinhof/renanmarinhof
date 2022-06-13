import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { goToMain } from '../../routes/cordinator'

const Page = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #2D0C5E;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto';
    font-style: normal;
    color: #fff;
    gap: 20px;
    button{
        padding: 16px;
        background-color: yellow;
        :hover{
            background-color: #5C16C5;
        }
    }
    `
export default function ErrorPage() {
    const history = useHistory()
    return (
        <Page>
            <h2>Erro 404</h2>
            <p>Página não encontrada</p>
            <button onClick={() => goToMain(history)}>VOLTAR</button>

        </Page>
    )
}