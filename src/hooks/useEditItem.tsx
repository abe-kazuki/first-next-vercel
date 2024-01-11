import { useCallback, useState } from 'react';

import { useReducer } from 'react';

interface State {
  meigaraName: string;
  region: string;
  price: number;
  alcoholDegree: number;
  officialUrl: string;
  description: string;
}

// 初期状態
const initialState: State = {
  meigaraName: '',
  region: '',
  price: 0,
  alcoholDegree: 0,
  officialUrl: '',
  description: '',
};

type Action =
  | { type: 'UPDATE_MEIGARA_NAME'; payload: string }
  | { type: 'UPDATE_REGION'; payload: string }
  | { type: 'UPDATE_PRICE'; payload: number }
  | { type: 'UPDATE_ALCOHOL_DEGREE'; payload: number }
  | { type: 'UPDATE_OFFICIAL_URL'; payload: string }
  | { type: 'UPDATE_DESCRIPTION'; payload: string };



const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'UPDATE_MEIGARA_NAME':
      return { ...state, meigaraName: action.payload };
    case 'UPDATE_REGION':
      return { ...state, region: action.payload };
    case 'UPDATE_PRICE':
      return { ...state, price: action.payload };
    case 'UPDATE_ALCOHOL_DEGREE':
      return { ...state, alcoholDegree: action.payload };
    case 'UPDATE_OFFICIAL_URL':
      return { ...state, officialUrl: action.payload };
    case 'UPDATE_DESCRIPTION':
      return { ...state, description: action.payload };
    default:
      return state;
  }
};

export const useEditItem = (initialStateOverride?: State) => {
  const [state, dispatch] = useReducer(reducer, initialStateOverride ||initialState);

  const updateMeigaraName = (newValue: string) => {
    dispatch({ type: 'UPDATE_MEIGARA_NAME', payload: newValue });
  };

  const updateRegion = (newValue: string) => {
    dispatch({ type: 'UPDATE_REGION', payload: newValue });
  };

  const updatePrice = (newValue: number) => {
    dispatch({ type: 'UPDATE_PRICE', payload: newValue });
  };

  const updateAlcoholDegree = (newValue: number) => {
    dispatch({ type: 'UPDATE_ALCOHOL_DEGREE', payload: newValue });
  };

  const updateOfficialUrl = (newValue: string) => {
    dispatch({ type: 'UPDATE_OFFICIAL_URL', payload: newValue });
  };

  const updateDescription = (newValue: string) => {
    dispatch({ type: 'UPDATE_DESCRIPTION', payload: newValue });
  };

  return {
    state,
    updateMeigaraName,
    updateRegion,
    updatePrice,
    updateAlcoholDegree,
    updateOfficialUrl,
    updateDescription,
    // 他にも必要な関数があれば追加
  };
}

export default useEditItem;
