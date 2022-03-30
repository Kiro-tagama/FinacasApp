import styled from 'styled-components/native'

export const Container = styled.View`
margin-bottom: 5px;
padding: 10px;
box-shadow: 2px 2px rgba(0,0,0, .4);
background-color: rgba(0,0,0, .02);
`
export const Tipo = styled.View`
flex-direction: row;
`
export const IconView = styled.View`
flex-direction: row;
background-color: ${props=>props.tipo === 'receita'? '#049301': '#c62e36'};
padding: 3px 8px;
border-radius: 7px;
align-items:center;
`
export const TipoText = styled.Text`
color: #fff;
font-size: 16px;
font-style: italic;
margin-left: 5px;
margin-bottom: 3px;
`
export const ValorText = styled.Text`
color:#222;
font-size:22px;
font-weight: bold;
`