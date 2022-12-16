import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import {
  iCartContext,
  iChildrenProps,
  iCurrentCart,
  iGetVerificationproducts,
  iProduct,
} from "./types";

export const CartContext = createContext({} as iCartContext);

export const CartProvider = ({ children }: iChildrenProps) => {
  const [products, setProducts] = useState([] as iProduct[]);
  const [currentCart, setCurrentCart] = useState([] as iCurrentCart[]);
  const [filteredList, setFilteredList] = useState([] as iCurrentCart[]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    async function loadproducts() {
      const token = localStorage.getItem("@BurguerKenzie:Token");

      if (!token) {
        return;
      }

      try {
        const response = await api.get<iGetVerificationproducts>("/products", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setProducts(response.data);
      } catch (error) {
        console.log(error);
      } finally {
      }
    }
    loadproducts();
  }, []);

  function handleAddProduct(product: iProduct) {
    const productExists: any = currentCart.find((e) => e.id === product.id);

    if (productExists) {
      const upDateCart = currentCart.map((e) => {
        if (e.count) {
          return e.id === product.id ? { ...e, count: (e.count += 1) } : e;
        } else {
          return e;
        }
      });
      setCurrentCart(upDateCart);
    } else {
      setCurrentCart((old) => [...old, { ...product, count: 1 }]);
    }
  }

  function addSameProduct(productId: number) {
    const upDateCart = currentCart.map((e) =>
      e.count ? (e.id === productId ? { ...e, count: (e.count += 1) } : e) : e
    );
    setCurrentCart(upDateCart);
  }

  function subSameProduct(productId: number) {
    const product = currentCart.find((e) => e.id === productId);

    if(product?.count){

      if (product.count <= 1) {
        const updateCart = currentCart.filter((e) => e.id !== productId);
  
        setCurrentCart(updateCart);
      } else {
        const updateCart = currentCart.map((e) => 
         e.count && e.id === productId ? { ...e, count: (e.count -= 1) } : e
        );
  
        setCurrentCart(updateCart);
      }
    }

  }

  return (
    <CartContext.Provider
      value={{
        products,
        setProducts,
        currentCart,
        setCurrentCart,
        handleAddProduct,
        showCart,
        setShowCart,
        addSameProduct,
        subSameProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
