import React from 'react';
import {Alert, TouchableWithoutFeedback} from 'react-native';
import {Container, TipoText, Tipo, IconView, ValorText} from './styles';

import Icon from 'react-native-vector-icons/Feather';

export default function HistoricoList({data, deleteItem}) {
  function handleDeleteItem() {
    Alert.alert(
      'Atencao',
      'Voce tem certeza que deseja deletar esse registro?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Confirmar',
          onPress: () => deleteItem(data.id),
        },
      ],
    );
  }

  return (
    <TouchableWithoutFeedback onLongPress={handleDeleteItem}>
      <Container>
        <Tipo>
          <IconView tipo={data.type}>
            <Icon
              name={data.type === 'despesa' ? 'arrow-down' : 'arrow-up'}
              size={20}
              color="#FFF"
            />
            <TipoText>{data.type}</TipoText>
          </IconView>
        </Tipo>
        <ValorText>R$ {data.value}</ValorText>
      </Container>
    </TouchableWithoutFeedback>
  );
}
