import { GET_GOT, DELETE_GOT } from "../actions/types.js";

const initialState = {
  got: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_GOT:
      return {
        ...state,
        got: action.payload
      };
    case DELETE_GOT:
      return {
        ...state,
        got: state.got.filter(got => got.id !== action.payload)
      };
    default:
      return state;
  }
}
