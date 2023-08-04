const {ADD_TO_CART, REMOVE_ITEM_IN_CART, SET_USER_DATA} = require('./constants');

const initialState = [];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.data];

    case REMOVE_ITEM_IN_CART:
      let deletItem = state.filter(item => {
        return item.name != action.data
       
      });
      return [...deletItem];

    case SET_USER_DATA:
      return [
        ...state,
        action.data
      ]

    default:
      return state;
  }
};
