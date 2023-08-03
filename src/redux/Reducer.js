const { ADD_TO_CART } = require("./constants");


const initialState = []

export const reducer = (state = initialState , action) =>{
switch(action.type){
    case ADD_TO_CART: return [
        ...state,
        action.payload
    ]

    default: return state

}
}



