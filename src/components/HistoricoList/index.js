import React from 'react';
import {
  Feather
} from '@expo/vector-icons'
import {TouchableWithoutFeedback} from 'react-native'
import {Container,Tipo,IconView,TipoText,ValorText} from './styles'

export default function HistoricoList({data, deleteItem}) {
  return ( 
    <TouchableWithoutFeedback onLongPress={()=>deleteItem(data) }>
      <Container>
        <Tipo>
          <IconView tipo={data.tipo}>
            <Feather 
            name={data.tipo=='receita'? 'arrow-up':'arrow-down'} 
            size={20} 
            color="#fff" />
            <TipoText>{data.tipo}</TipoText>
          </IconView> 
        </Tipo> 
        <ValorText>R$ {data.valor}</ValorText>
      </Container>
    </TouchableWithoutFeedback>
  );
}