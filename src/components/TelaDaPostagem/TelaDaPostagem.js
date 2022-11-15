import React from 'react'
import {ContainerPostagem, Image, Description} from './styles'

const TelaDaPostagem = (props) => {
  return (
    (props.url && props.descricao && props.titulo ?
    <ContainerPostagem>
            <Image src={props.url} alt='drone view'/>
            <Description>{props.descricao}</Description>
            <Description>{props.titulo}</Description>
    </ContainerPostagem> :

    <ContainerPostagem>
    <Image src={"https://yt3.ggpht.com/ytc/AMLnZu-p6Y8W9ihEBnKQGlCkuEgxSjZIQ-Hp3U_A4yCe=s900-c-k-c0x00ffffff-no-rj"} alt='drone view'/>
    <Description>{"Insira sua imagem aqui"}</Description>
    <Description>{"Insira seu título"}</Description>
    </ContainerPostagem>)

  )
}

export default TelaDaPostagem