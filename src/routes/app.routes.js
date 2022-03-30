import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer'
import Home from '../pages/Home'
import New from '../pages/New'
import Profile from '../pages/Profile'

import CustonDrawer from '../components/CustonDrawer'

const Drawer=createDrawerNavigator()

export default function AppRoutes() {
  return(
    <Drawer.Navigator
      drawerContent={(props)=> <CustonDrawer {...props}/>}

      screenOptions={{
        drawerStyle: {
          backgroundColor:'#222',
        },
        drawerActiveTintColor:'#000',
        drawerActiveBackgroundColor:'#00b94a',
        drawerInactiveTintColor:'#666',
        drawerInactiveBackgroundColor:'#000',
        drawerLabelStyle:{
          fontWeight:'bold',
          fontSize:17
        },
        drawerItemStyle:{marginVertical:5}
      }}
      
      
    >
      <Drawer.Screen 
        name='Home' 
        component={Home}
        options={{headerShown:false}}
      />
      <Drawer.Screen 
        name='Registrar' 
        component={New}
        options={{headerShown:false}}
      />
      <Drawer.Screen 
        name='Perfil' 
        component={Profile}
        options={{headerShown:false}}
      />
    </Drawer.Navigator>
  )
}
