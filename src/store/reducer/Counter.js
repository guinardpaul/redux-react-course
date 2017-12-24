import * as actionTypes from '../actions';

const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      // IMMUTABLE 1
      const newState = Object.assign({}, state);
      newState.counter = state.counter + 1;
      return newState;

    case actionTypes.DECREMENT:
      // IMMUTABLE 2
      return {
        ...state,
        counter: state.counter - 1
      };

    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + 10
      };

    case actionTypes.SUBSTRACT:
      return {
        ...state,
        counter: state.counter - 5
      };

    default:
      break;
  }

  return state;
};

export default reducer;
