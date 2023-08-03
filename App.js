import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './src/components/Header'
import Product from './src/components/Product'
// import Product from './src/components/Product'



const App = () => {
  const productss = [{
    name: "samsung Mobile"
    , color : "white",
    price:3000,
    image:"https://i.dummyjson.com/data/products/1/thumbnail.jpg"
  },
  {
    name: "Apple Mobile"
    , color : "red",
    price:2000,
    image:"https://i.dummyjson.com/data/products/2/thumbnail.jpg"
  },
  {
    name: "Nokia Mobile"
    , color : "blue",
    price:1000,
    image:"https://i.dummyjson.com/data/products/3/thumbnail.jpg"
  }

  ]
  return (
    <View>
      <Text>App</Text>
      <Header/>
      {productss.map((item , index)=>{
        return(
          <Product item={item}/>
       )
      })}
      
    
      
    </View>
  )
}

export default App

const styles = StyleSheet.create({})