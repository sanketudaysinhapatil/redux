import {StyleSheet, Text, View, Image, Button} from 'react-native';
import React from 'react';
import {addToCart} from '../redux/Action';
import {useDispatch} from 'react-redux';
const Product = ({item}) => {
const dispatch = useDispatch()

  const handleAddToCart = item => {
    console.log('called', item);
    dispatch(addToCart(item))
  };
  return (
    <View
      key={item.price}
      style={{alignItems: 'center', borderBottomWidth: 2, padding: 10}}>
      <Text>{item.name}</Text>
      <Image
        source={{uri: item.image}}
        style={{width: 100, height: 100, objectFit: 'contain'}}
      />
      <Text>{item.price}</Text>
      <Button title="add to cart" onPress={() => handleAddToCart(item)} />
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({});
