import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import {createNativeStackNavigator}  from "@react-navigation/native-stack"
import Home from './screens/Home'
import UserList from './components/UserList'

const Stack = createNativeStackNavigator()
const AppNavigator = () => {
    
  return (
   <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen component={Home} name='Home'/>
        <Stack.Screen component={UserList} name='Userlist'/>
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})