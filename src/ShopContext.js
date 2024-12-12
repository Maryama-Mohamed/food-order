import { createContext, useContext, useReducer } from "react";
import shopReducer, { initialState } from "./shopReducer";
import { type } from "@testing-library/user-event/dist/type";

const ShopContext = createContext(initialState);

export const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  const addToCart = (product) => {
    const updatedProduct = state.products.concat(product);
    CalculateTotalProducts (updatedProduct);

    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updatedProduct,
      },
    });
  };

  const removeFromCart = (product) => {
    const updatedProduct = state.products.filter((p) => p.id !== product.id);
    CalculateTotalProducts (updatedProduct);
    dispatch({
      type: "REMOVE_CART",
      payload: {
        products: updatedProduct,
      },
    });
  };

  const CalculateTotalProducts = (products) => {

    let total = 0;
    products.forEach( pro =>{
      total += pro.price;
    });

    dispatch({
      type: 'CALCULATE_TOTAL_PRICE',
      payload:  total
    })

  };

  const value = {
    products: state.products,
    total: state.total,
    addToCart,
    removeFromCart,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

const useShop = () => {
  const context = useContext(ShopContext);

  if (context === undefined) {
    throw new Error("context mmust be use inside shop context");
  }
  return context;
};
export default useShop;
