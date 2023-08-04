import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Product from '../components/Product'


const Home = () => {
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
        <Product item={item} key={index}/>
     )
    })}
    
  
    
  </View>
  )
}

export default Home

const styles = StyleSheet.create({})