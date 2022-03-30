import React, {useState,useContext} from 'react';
import { Platform,ActivityIndicator } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { AuthContext } from "../../contexts/auth";

import { Background,Container,Logo,AreaInput,Input,SubmitButton,SubmitText } from "../SignIn/styles";

export default function SignUp() {
  const [nome,setNome]=useState('')
  const [email, setEmail]= useState('')
  const [password, setPassword]= useState('')

  const { signUp,loadingAuth }=useContext(AuthContext)

  function handleSignUp() {
    signUp(email,password,nome)
  }
  
  return (
   <Background>
     <Container
      behavior={Platform.os==='ios'?'padding':''}
      enabled
     >
        <AreaInput>
          <Feather name="user" size={24} color="#00b94a" />
          <Input
            placeholder="Nome"
            autocorrect={false}
            autocapitalize='none'
            placeholderTextColor='rgba(255,255,255,.3)'
            value={nome}
            onChangeText={(texto)=>setNome(texto)}
          />
        </AreaInput>
        <AreaInput>
          <Feather name="mail" size={24} color="#00b94a" />
          <Input
            placeholder="Email"
            autocorrect={false}
            autocapitalize='none'
            placeholderTextColor='rgba(255,255,255,.3)'
            value={email}
            onChangeText={(texto)=>setEmail(texto)}
          />
        </AreaInput>
        <AreaInput>
          <Feather name="lock" size={24} color="#00b94a" />
          <Input
            placeholder="Senha"
            autocorrect={false}
            autocapitalize='none'
            placeholderTextColor='rgba(255,255,255,.3)'
            value={password}
            onChangeText={(texto)=>setPassword(texto)}
            secureTextEntry={true}
          />
        </AreaInput>

        <SubmitButton onPress={handleSignUp}>
        {
            loadingAuth?(
              <ActivityIndicator size={20} color="#fff"/>
            ):(
              <SubmitText>Cadastrar</SubmitText>
            )
          }
        </SubmitButton>

       
     </Container>
   </Background>
  );
}