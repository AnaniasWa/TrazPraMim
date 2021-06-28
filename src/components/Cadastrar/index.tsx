import { useState } from "react"
import { Container, Content } from "./styles"
import { useHistory } from "react-router-dom";

export default function Cadastrar(){

const history = useHistory();
 
const [ password , setPassword ] = useState("");
const [ confirmPassword , setConfirmPassword ] = useState("");

 function handlePassword ( event: any ){
    setPassword(event.target.value);
 }

 function handleConfirmPassword ( event: any ){
    setConfirmPassword(event.target.value);
 }

 function handleSubmit (){
    if (password === confirmPassword)
        history.push("/");
    else
        alert("Preencha todos os campos!!");
 }
 
 
    return(
        <Container>
            <Content>
                <h1>Cadastro</h1>
                
                <div>
                
                    <label htmlFor="name">Nome Completo:</label>
                    <input id="name"  required></input>

                    <label htmlFor="email">E-mail:</label>
                    <input id="email" type="email" required></input>

                    <label htmlFor="password">Senha:</label>
                    <input id="password" type="password" onChange={ handlePassword}  required></input>

                    <label htmlFor="confirm-password">Confirmar Senha:</label>
                    <input id="confirm-password" type="password" onChange={ handleConfirmPassword}  required ></input>

                    <label htmlFor="city">Cidade:</label>
                    <input id="city"  required></input>

                    <label htmlFor="state">Estado:</label>
                    <input id="state"  required ></input>
                    
                </div>

                <button onClick={ handleSubmit } >
                    Cadastrar
                </button>

            </Content>
        </Container>
    )
}