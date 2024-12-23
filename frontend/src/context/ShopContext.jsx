import { createContext } from "react";
import { products } from "../assets/assets";

const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "$"; 
  const delivery_fee = 35; 

  const value = {
    products, 
    currency, 
    delivery_fee,
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export { ShopContext, ShopContextProvider };
