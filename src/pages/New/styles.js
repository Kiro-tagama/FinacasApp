import styled from 'styled-components/native'

export const Background = styled.View`
flex:1;
background-color:#222;
`
export const Input = styled.TextInput.attrs({
  placeholderTextColor:"#222"
})`
height:55px;
width:90%;
background-color: rgba(255,255,255, .9);
margin-top: 30px;
font-size:17px;
padding: 0 10px;
border-radius: 7px;
`
export const SubmitButton = styled.TouchableOpacity`
height:50px;
width:90%;
background-color: #00b94a10;
border: 3px solid #00b94a;
margin-top: 35px;
align-items: center;
justify-content:center;
border-radius: 7px;
`
export const SubmitText = styled.Text`
font-size: 21px;
font-weight: bold;
color:#fff;
`