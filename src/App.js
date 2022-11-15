import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import  FormularioCadastro  from "./components/FormularioCadastro/FormularioCadastro";
import { Header } from "./components/Header";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {
  //input controlado
  //1: criar um estado para cada input
  const [url, setUrl] = useState("")
  const [descricao, setDescricao] = useState("")

//2: onchange = funções e eventos
function changeUrl(event){
  setUrl(event.target.value)
}

function changeDescricao(e){
  setDescricao(e.target.value)
}

//3: chamar o estado no value

const[titulo, setTitulo] = useState("")

function changeTitulo(event){
  setTitulo(event.target.value)

  console.log(url, descricao, titulo)
}
  
  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header />
          <FormularioCadastro 
          url={url} 
          descricao={descricao} 
          changeUrl={changeUrl} 
          changeDescricao={changeDescricao} 
          titulo={titulo}
          changeTitulo={changeTitulo}
          />
        </aside>
        <TelaDaPostagem
        url={url}
        descricao={descricao} 
        titulo={titulo} />
      </Container>
    </>
  );
}

export default App;
