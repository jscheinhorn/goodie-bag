import Store from '../store';
import Axios from 'axios';
import { runInNewContext } from 'vm';
const initialState = {};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};


// ACTION TYPES
let CANDY_UPDATE = 'CANDY_UPDATE'

// ACTION CREATOR - carries the data to the reducer
const candyUpdater = (candy) => {
  type: CANDY_UPDATE,
  candy
}

// THUNK CREATOR - Asynchronously updates and gets the candy data
export const candyUpdate = () => async dispatch => {
  try {
      const { data } = await Axios.put('/api/candies')
  return dispatch(candyUpdater(data))
  } catch(err) {
    next(err)
  }
}

// CANDY SUB-REDUCER
const candiesReducer = (state = [], action) {
  switch(action.type) {
    case CANDY_UPDATE:
    return {action.candy}
  }
}

export default rootReducer;
