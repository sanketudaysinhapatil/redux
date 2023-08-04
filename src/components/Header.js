import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {useNavigation} from "@react-navigation/native"

const Header = () => {
  const [cartItem , setCartItem ] = useState(0)
  const cartData = useSelector((state)=> state.reducer)
  // console.log(cartData)
  const navigation = useNavigation()

  useEffect(()=>{
    setCartItem(cartData.length)
  },[cartData])
  
  return (
    <View style={{}}>
      <Text style={{color:"red" , textAlign:"right", padding:10, fontSize:20}}>{cartItem}</Text>
      <TouchableOpacity style={{width:300, backgroundColor:"red", height:50}} onPress={()=> navigation.navigate("Userlist")}>
        <Text style={{color:"black"}}>UseList</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})