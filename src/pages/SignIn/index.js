import React, {useState, useContext} from 'react';
import { Platform,TouchableOpacity,ActivityIndicator } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {AuthContext} from '../../contexts/auth'

import { Background,Container,Logo,AreaInput,Input,SubmitButton,SubmitText,Link,LinkText } from "./styles";

export default function SignIn() {
  const navigation=useNavigation()

  const [email, setEmail]= useState('')
  const [password, setPassword]= useState('')
  const [secure,setSecure]= useState(true)
  const { signIn,loadingAuth }=useContext(AuthContext)

  function handleLogin(params) {
    signIn(email,password)
  }

  function passSecure(){
    if (secure===true) {
      setSecure(false)
    } else {
      setSecure(true)
    }
  }
  
  return (
   <Background>
     <Container
      behavior={Platform.OS==='ios'?'padding':''}
      enabled
     >
       <Logo source={require('../../assets/Logo.png')}/>
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
            secureTextEntry={secure}
          />
          <TouchableOpacity onPress={passSecure}>
            <Feather name={secure === true? 'eye':'eye-off'} size={24} color="#00b94a" style={{marginLeft:10}} />
          </TouchableOpacity>

        </AreaInput>

        <SubmitButton onPress={handleLogin}>
          {
            loadingAuth?(
              <ActivityIndicator size={20} color="#fff"/>
            ):(
              <SubmitText>Acessar</SubmitText>
            )
          }
        </SubmitButton>

        <Link onPress={()=> navigation.navigate('SignUp')}>
          <LinkText>Criar uma conta!</LinkText>
        </Link>

     </Container>
   </Background>
  );
}