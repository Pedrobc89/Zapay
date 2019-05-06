import axios from "axios";

import { GET_GOT, DELETE_GOT } from "./types";

// GET_GOT
export const getGot = () => dispatch => {
  axios
    .get("/api/got/")
    .then(res => {
      dispatch({
        type: GET_GOT,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

// DELETE_GOT
export const deleteGot = id => dispatch => {
  axios
    .delete(`/api/got/${id}/`)
    .then(res => {
      dispatch({
        type: DELETE_GOT,
        payload: id
      });
    })
    .catch(err => console.log(err));
};
