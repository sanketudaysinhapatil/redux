import {StyleSheet, Text, View, Image, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import {addToCart, removeItemFromCart} from '../redux/Action';
import {useDispatch, useSelector} from 'react-redux';

const Product = ({item, index}) => {
  const [isAdded, setIsAdded] = useState(false);
  const dispatch = useDispatch();
  const cartItem = useSelector(state => state.reducer);
  

  useEffect(() => {
    let result = cartItem.filter((elemet)=>{
      return(
        elemet.name === item.name
      )
     })
     if(result.length){
      setIsAdded(true)
    }else{
      setIsAdded(false)
    }
  }, [cartItem]);

  const handleAddToCart = item => {
    // console.log('called', item);
    dispatch(addToCart(item));
  };

  const handleRemoveCart = (item) => {
    dispatch(removeItemFromCart(item.name));
  };
  return (
    <View
      key={index}
      style={{alignItems: 'center', borderBottomWidth: 2, padding: 10}}>
      <Text>{item.name}</Text>
      <Image
        source={{uri: item.image}}
        style={{width: 100, height: 100, objectFit: 'contain'}}
      />
      <Text>{item.price}</Text>
      {!isAdded ? (
        <Button title="add to cart" onPress={() => handleAddToCart(item)} />
      ) : (
        <Button
          title="remove item to cart"
          onPress={() => handleRemoveCart(item)}
        />
      )}
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({});
