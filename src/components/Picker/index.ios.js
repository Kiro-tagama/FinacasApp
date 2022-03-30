import React from 'react';
import {
  PickerView
} from './styles';
import {Picker as Pickers} from '@react-native-community/picker';

export default function Picker({onChange,tipo}) {
  return ( 
    <PickerView >
      <Pickers
      style={{
        width:"100%"
      }}
      selectedValue={tipo}
      onValueChange={(valor)=>onChange(valor)}
      >
        <Pickers.Item label='Receita' value="receita"/>
        <Pickers.Item label='Despesa' value="despesa"/>
      </Pickers> 
    </PickerView>
  );
}