import { useEffect, useReducer } from "react";

const initialState = {
  isLoading: true,
  data: [],
  error: null
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'success':
      return {
        isLoading: false,
        data: action.payload,
        error: null
      };
    case 'failed':
      return {
        isLoading: false,
        data: [],
        error: action.payload
      };
    default: return state;
  }
}

async function getDataFromAPI(dispatch) {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=all');
  const data = await res.json();

  try {
    dispatch({ type: 'success', payload: data });
  } catch (e) {
    dispatch({ type: 'failed', payload: e });
  }
}

export default function useFetch() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getDataFromAPI(dispatch);
  }, []);

  return state;
}