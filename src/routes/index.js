import React, {useContext} from 'react';
import { AuthContext } from "../contexts/auth";

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes'
import { View,ActivityIndicator } from 'react-native';

export default function Routes() {
  const { signed,loading } = useContext(AuthContext)

  if(loading){
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#222'}}>
        <ActivityIndicator size='large' color='#00b94a'/>
      </View>
    )
  }
  return (
    signed ? <AppRoutes/> : <AuthRoutes/>
  );
}