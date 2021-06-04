import { SET_ERROR, CLEAR_ERROR } from './actions';

const initialState = {
  error: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        error: action.error,
      };

    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
}

export default reducer;
