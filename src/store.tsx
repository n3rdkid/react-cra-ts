import React from "react";
import { IState, IAction } from "./Interfaces";

const initialState: IState = {
  episodes: [],
  favorites: [],
};
export const Store = React.createContext<IState | any>(initialState);
const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, episodes: action.payload };
    case "ADD_FAVORITE":
      return { ...state, favorites: [...state.favorites, action.payload] };
    case "REMOVE_FAVORITE":
      return { ...state, favorites: action.payload };
    default:
      return state;
  }
};

export const StoreProvider = (props: any): JSX.Element => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
};
