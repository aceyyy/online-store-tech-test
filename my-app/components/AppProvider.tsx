"use client";

import { InitialStateCart } from "@/lib/mock.response";
import { createContext, useContext, useState } from "react";

const AppContext = createContext<any>(undefined);

export default function AppProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState(InitialStateCart);
  const [toggleCartModal, setToggleCartModal] = useState(false);

  return (
    <AppContext.Provider value={{
      cart,
      setCart,
      toggleCartModal,
      setToggleCartModal,
    }}>
      {children}
    </AppContext.Provider>
  )
};

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) throw new Error("useAppContext must be used within a StoreProvider");
  return context;
};