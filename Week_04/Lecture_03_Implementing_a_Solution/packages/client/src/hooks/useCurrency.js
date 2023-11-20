import { createContext, useContext, useReducer } from "react";

const currencyContext = createContext();

const initialState = {
  symbol: "$",
  multiplier: 1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_CURRENCY":
      return {
        symbol: action.symbol,
        multiplier: action.multiplier,
      };
    default:
      return state;
  }
};

const useCurrency = () => {
  const { state, dispatch } = useContext(currencyContext);

  const toggleCurrency = () => {
    dispatch({
      type: "SET_CURRENCY",
      symbol: state.symbol === "$" ? "€" : "$",
      multiplier: state.symbol === "$" ? 0.8 : 1,
    });
  };

  const getPrice = (amount) => {
    return `${state.symbol} ${amount * state.multiplier}`;
  };

  return {
    currency: state,
    toggleCurrency,
    getPrice,
  };
};

export const CurrencyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <currencyContext.Provider value={{ state, dispatch }}>
      {children}
    </currencyContext.Provider>
  );
};

export default useCurrency;
