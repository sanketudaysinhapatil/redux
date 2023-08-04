import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserLIst } from '../redux/Action'

const UserList = () => {
  const dispatch = useDispatch()
  const userList = useSelector((state)=> state.reducer)
console.log("in compoenrnt", userList)
  useEffect (()=>{
    dispatch(getUserLIst())
  },[])
 

  return (
    <View>
      <Text>UserLisdfadfasxxxxxst</Text>
      
    </View>
  )
}

export default UserList

const styles = StyleSheet.create({})