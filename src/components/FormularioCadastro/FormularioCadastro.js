import { FormContainer, Form, Input, StyledLabel } from "./styled";

export const FormularioCadastro = ({url, descricao, titulo, changeUrl, changeDescricao, changeTitulo}) => {
//essa é uma forma de desestruturação que seria passar props na função e fazer essa consta outra é essa que ta de fazer o objeto direto lá mais prática
  //const {url, decricao, changeUrl, changeDescricao} = props

  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel htmlFor="foto"  >
          Imagem:
          <Input id="foto" onChange={changeUrl} value={url}/>
        </StyledLabel>
        <StyledLabel htmlFor="descricao" onChange={changeTitulo} value={titulo} >
          Título:
          <Input id="descricao" />
        </StyledLabel>
        <StyledLabel htmlFor="descricao" onChange={changeDescricao} value={descricao} >
          Descrição:
          <Input id="descricao" />
        </StyledLabel>
      </Form>
    </FormContainer>
  );
};


export default FormularioCadastro