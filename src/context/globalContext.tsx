"use client";

import { useQuery } from "react-query";
import { createContext, useContext, useState } from "react";
import { CartContextType, Product } from "../interfaces/cart";

export const GlobalContext = createContext<CartContextType | undefined>(
  undefined
);

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch(
        "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=name&orderBy=DESC"
      ).then((res) => res.json()),
  });

  const [cart, setCart] = useState<Product[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (product: Product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      updateQuantity(
        product.id as number,
        (existingProduct.quantity as number) + 1
      );

      return;
    }

    setCart([...cart, { ...product, quantity: 1 }]);
  };

  const updateQuantity = (productId: number, newQuantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const getQuantity = (productId: number) => {
    const item = cart.find((item) => item.id === productId);
    return item ? item.quantity : 0;
  };

  const removeProduct = (productId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const handleDecrement = (productId: number) => {
    const currentQuantity = getQuantity(productId);

    if (currentQuantity !== undefined && currentQuantity > 0) {
      updateQuantity(productId, currentQuantity - 1);
    }
  };

  const handleIncrement = (productId: number) => {
    const currentQuantity = getQuantity(productId);
    if (currentQuantity !== undefined) {
      updateQuantity(productId, currentQuantity + 1);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        data,
        isLoading,
        updateQuantity,
        removeProduct,
        addToCart,
        cart,
        cartOpen,
        setCartOpen,
        getQuantity,
        handleDecrement,
        handleIncrement,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
