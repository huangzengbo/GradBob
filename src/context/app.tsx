import React, {useReducer} from 'react';

import { iProduct } from '../types/cart';
import createCtx from '../utils/createCtx';

interface Context {
  state: State;
  setUser: (id: number) => void;
  setProducts: (products: iProduct[]) => void;
}

const [useCtx, Provider] = createCtx<Context>();

export enum ActionType {
  SetUser = 'set-user',
  SetProducts = 'set-products',
}

export interface State {
  userId: number;
  products: iProduct[];
}

const initialState: State = {
  userId: 0,
  products: [],
};

interface SetUserAction {
  type: ActionType.SetUser;
  payload: number;
}

interface SetProductsAction {
  type: ActionType.SetProducts;
  payload: iProduct[];
}


type Action = SetUserAction | SetProductsAction;

interface Props {
  children?: React.ReactElement;
}

type Reducer = (state: State, action: Action) => State;

const setUser =
  (dispatch: React.Dispatch<SetUserAction>) =>
  (userId: number): void => {
    dispatch({
      type: ActionType.SetUser,
      payload: userId,
    });
  };

const setProducts =
  (dispatch: React.Dispatch<SetProductsAction>) =>
  (products: iProduct[]): void => {
    dispatch({
      type: ActionType.SetProducts,
      payload: products,
    });
  };

const reducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'set-user':
      return {...state, userId: action.payload};
    case 'set-products':
      return {...state, products: action.payload};
    default:
      return state;
  }
};

function AppProvider(props: Props): React.ReactElement {
  const [state, dispatch] = useReducer<Reducer>(reducer, initialState);

  const actions = {
    setUser: setUser(dispatch),
    setProducts: setProducts(dispatch),
  };

  return <Provider value={{state, ...actions}}>{props.children}</Provider>;
}

export {useCtx as useAppContext, AppProvider};
