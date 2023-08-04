const { ADD_TO_CART, REMOVE_ITEM_IN_CART, USER_LIST } = require("./constants");

export function addToCart (item){
    return{
        type:ADD_TO_CART,
        data : item
    }
}

export function removeItemFromCart (item){
    return{
        type:REMOVE_ITEM_IN_CART,
        data : item
    }
}

export function getUserLIst (){
    return {
        type: USER_LIST
    }
}