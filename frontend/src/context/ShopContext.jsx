import { createContext, useState } from "react";
import { products } from "../assets/assets";

const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 35;

  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(true);

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export { ShopContext, ShopContextProvider };
