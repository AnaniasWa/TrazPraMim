import { Container, Content } from "./styles";
import {Link} from "react-router-dom";

export default function Login() {
    return (
        <Container>
            <Content>
                <label htmlFor="email">E-mail</label>
                <input id="email" type="email" required/>

                <label htmlFor="password">Senha</label>
                <input id="password" type="password" required/>

                <button type="submit">Entrar</button>

                <Link to="/Cadastrar">
                Não possui cadastro? Clique aqui!!
                </Link>
            </Content>
        </Container>
    )
}